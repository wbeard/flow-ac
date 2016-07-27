// @flow
import { getNavPrefProject } from './selectors';

const project = getNavPrefProject(1234);

console.log(project.get('name'));
