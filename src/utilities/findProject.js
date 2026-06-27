import projects from '../data/projects.json';
import { hyphenateWords } from './hyphenateWords';

function findProject(projectId) {
  let project;
  for (let i = 0; i < projects.length; i++) {
    if (hyphenateWords(projects[i].title) === projectId) project = projects[i];
  }
  return project;
}

export { findProject };
