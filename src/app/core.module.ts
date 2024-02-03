import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  imports: [
    MenuModule,
    TabViewModule,
    ToastModule,
    DividerModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    PaginatorModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    DialogModule,
    TooltipModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    RadioButtonModule,
  ],
  exports: [
    MenuModule,
    TabViewModule,
    ToastModule,
    DividerModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    PaginatorModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    DialogModule,
    TooltipModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    RadioButtonModule
  ],
})
export class CoreModule { }
