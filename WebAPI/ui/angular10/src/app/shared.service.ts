import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44334/api";
  readonly PhotoUrl="https://localhost:44334/Photos";

  constructor(private http:HttpClient) { }
   
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }
  
  addDepartment(val:any){
  return this.http.post(this.APIUrl+'/Department',val);
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
    }
  deleteDepartment(val:any){
      return this.http.delete(this.APIUrl+'/Department?id='+val);
      }

  getEmpList():Observable<any[]>{
        return this.http.get<any>(this.APIUrl+'/Employee');
      }
      
  addEmpartment(val:any){
      return this.http.post(this.APIUrl+'/Employee',val);
      }
  updateEmpartment(val:any){
        return this.http.put(this.APIUrl+'/Employee',val);
        }
  deleteEmpartment(val:any){
          return this.http.delete(this.APIUrl+'/Employee',val);
          }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }
}
