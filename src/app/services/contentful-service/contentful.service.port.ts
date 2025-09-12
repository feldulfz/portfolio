import { Observable } from "rxjs";
import { About } from "../../models/about.model";
import { Project } from "../../models/project.model";

export abstract class ContentfulService {
    abstract getAbout(): Observable<About>;    
    abstract getProjects(): Observable<Project[]>;        
}