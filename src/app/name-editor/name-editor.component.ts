import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validator,FormControl, FormGroup, Validators  } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent {
  constructor(private fb: FormBuilder) {}

  displayInfo=false;

  profileForm = new FormGroup({
    nameCompany: new FormControl("", Validators.required),
    website: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    birthday: new FormControl("", Validators.required),
    groupdiachi: new FormGroup({
      city: new FormControl("", Validators.required),
      district: new FormControl("", Validators.required),
      phuongxa: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)
    }),
    aliases: this.fb.array([this.fb.control("", Validators.required)])
  });

  getFormValue() {
    this.displayInfo=!this.displayInfo;
  }

  get nameCompany() {
    return this.profileForm.get("nameCompany");
  }
  get website() {
    return this.profileForm.get("website");
  }

  get websiteError() {
    return this.website.hasError('required')?'Xin vui long nhap ten cong ty':'';
  }


  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control('', Validators.required));
  }

}
