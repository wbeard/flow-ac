// @flow
const getProjectUrl = (state: Object, id: string): string => { return ''; };
const getProjectPrefIdFromOid = (state: Object, id: number): string => { return ''; };
const expandProjectRequested = () => { return {}; };
const expandProjectFailure = () => { return {}; };
const expandProjectSuccess = () => { return {}; };
const AlmApi = { request: (url: string, params: Object, options: Object): Promise<any[]> => { return Promise.resolve() } };
const createMutateAction = (action: MutateAction): Object => action;

type MutateAction = {
  component: Object,
  description: string,
  shouldCallAPI: (state: Object) => boolean,
  callAPI: (state: Object) => Promise<any[]>,
  requestAction: () => Object,
  failureAction: () => Object,
  successAction: (response: Object) => Object
}

export function expandProject(projectOid: number): MutateAction {
  return createMutateAction({
    component: {},
    description: 'expandProject',
    shouldCallAPI: (state: Object): boolean => true,
    callAPI: (state: Object): Promise<any[]> => {
      const projectPrefId = getProjectPrefIdFromOid(state, projectOid);
      if (!projectPrefId) {
        return Promise.reject();
      }
      return AlmApi.request(getProjectUrl(state, projectPrefId), {}, {
        body: { Expanded: true },
        method: 'patch'
      });
    },
    requestAction: () => expandProjectRequested({ ProjectOID: projectOid }),
    failureAction: () => expandProjectFailure({ ProjectOID: projectOid }),
    successAction: (response: Object) => expandProjectSuccess(response)
  })
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
