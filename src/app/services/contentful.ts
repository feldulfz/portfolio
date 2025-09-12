import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../../enviroment/enviroment';
import { from, map } from 'rxjs';
import { Project } from '../models/project.model';
import { About, defaultAbout } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class Contentful {
  
  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getAbout() {
    return from(this.client.getEntries({ content_type: 'portfolioAbout', limit: 1 })).pipe(
      map((response: any) => {
        if (!response.items.length) {
          return defaultAbout; 
        }

        const { firstName, lastName, profession, aboutMe, resumeLink, profileUrl, email } = response.items[0].fields;
        return {
          firstName,
          lastName,
          profession,
          aboutMe,
          resumeLink,
          profileUrl: `https:${profileUrl.fields.file.url}`,
          email
        } as About;
      })
    );
  }  

  getProjects() {
    return from(this.client.getEntries({ content_type: 'portfolio' })).pipe(
      map((response: any) =>
        response.items.map((item: any) => {
          const { title, description, status, imageUrl, githubLink, projectLink, category } = item.fields;
          return {
            title,
            description,
            status,
            imageUrl: `https:${imageUrl.fields.file.url}`,
            githubLink,
            projectLink,
            category
          } as Project;
        })
      )
    );
  }  
}
