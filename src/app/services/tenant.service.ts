import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  private apiUrl = 'https://your-api-url.com/tenants'; // URL của API

  constructor(private http: HttpClient) {}

  getTenantById(tenantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${tenantId}`);
  }

  addTenant(tenantData: any): Observable<any> {
    return this.http.post(this.apiUrl, tenantData);
  }

  updateTenant(tenantId: string, tenantData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${tenantId}`, tenantData);
  }
}
