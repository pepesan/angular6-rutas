import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponent } from './material.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialComponent ],
      imports: [ RouterTestingModule,
        MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
        HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
