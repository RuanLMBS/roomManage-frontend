import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './services/login.guard';
import { authGuard } from './services/auth.guard';
import { RegisterUserComponent } from './register-user/register-user.component';
import { adminGuard } from './guards/admin.guard';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RegisterSpacesComponent } from './register-spaces/register-spaces.component';
import { ManageSpacesComponent } from './manage-spaces/manage-spaces.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditSpacesComponent } from './edit-spaces/edit-spaces.component';
import { RequestSpaceComponent } from './request-space/request-space.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { teacherGuard } from './guards/teacher.guard';
import { managerGuard } from './guards/manager.guard';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'login'},
    {path:'login', component: LoginComponent, canActivate:[loginGuard]},
    {path:'home', component: HomeComponent, canActivate:[authGuard]},
    {path:'registeruser', component: RegisterUserComponent, canActivate:[authGuard,adminGuard]},
    {path:'manageusers', component: ManageUsersComponent, canActivate:[authGuard,adminGuard]},
    {path:'registerspaces', component: RegisterSpacesComponent, canActivate:[authGuard,adminGuard]},
    {path:'managespaces', component: ManageSpacesComponent, canActivate:[authGuard,adminGuard]},
    {path:'edit-user/:id', component: EditUserComponent, canActivate:[authGuard,adminGuard]},
    {path:'edit-space/:id', component: EditSpacesComponent, canActivate:[authGuard,adminGuard]},
    {path:'request-space/:id', component:RequestSpaceComponent, canActivate:[authGuard,teacherGuard]},
    {path:'pendingrequests', component:PendingRequestsComponent, canActivate:[authGuard,managerGuard]}
];
