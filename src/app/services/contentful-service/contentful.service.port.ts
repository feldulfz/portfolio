import { Observable } from "rxjs";
import { About } from "../../models/about.model";
import { Project } from "../../models/project.model";
import { Logo } from "../../models/logo.model";

export abstract class ContentfulService {
    abstract getAbout(): Observable<About>;    
    abstract getLogos(): Observable<Logo[]>;        
    abstract getProjects(): Observable<Project[]>;        
}