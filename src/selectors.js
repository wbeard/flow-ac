// @flow
const stateKey = 'foo';
import { Map } from 'immutable';
type Project = Map<>;


export const getNavPrefsState = (state: Object): ?Map<> => state[stateKey];
export const getNavPrefProject = (state: Object, projectOid: number): ?Project => {
  const localState = getNavPrefsState(state);
  const project = localState && localState.getIn(['value', 'Projects'], Map()).get(projectOid);

  return project;
};
