import projects from '../data/projects.json';
import { hyphenateWords } from './hyphenateWords';
import type { ProjectDocument } from '../types/sharedDataTypes';

function findProject(projectId: string) {
  let project: ProjectDocument | undefined;
  for (let i = 0; i < projects.length; i++) {
    if (hyphenateWords(projects[i].title) === projectId) project = projects[i];
  }
  return project;
}

export { findProject };
  