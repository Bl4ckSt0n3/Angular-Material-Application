import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(8)]),
    firstNameFormControl: new FormControl('', [Validators.required]),
    lastNameFormControl: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.registerForm.controls;
  }
  matcher = new MyErrorStateMatcher();

  countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ]
  register() {
    
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    // this.currentItemsToShow = this.items;
  }

}

// onPageChange($event: any) {
  //   this.currentItemsToShow =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  // }

//   currentItemsToShow: any[]= [];
// items = [
//   {name: 'name1', id: 1},
//   {name: 'name2', id: 1},
//   {name: 'name3', id: 1},
//   {name: 'name4', id: 1},
//   {name: 'name5', id: 1},
//   {name: 'name6', id: 1},
//   {name: 'name7', id: 1},
//   {name: 'name8', id: 1},
//   {name: 'name9', id: 1},
//   {name: 'name10', id: 1},
//   {name: 'name11', id: 1},
//   {name: 'name12', id: 1},
//   {name: 'name13', id: 1},
//   {name: 'name14', id: 1},
//   {name: 'name15', id: 1},
//   {name: 'name16', id: 1},
//   {name: 'name17', id: 1},
//   {name: 'name18', id: 1},
//   {name: 'name19', id: 1},
//   {name: 'name20', id: 1},
//   {name: 'name21', id: 1},
//   {name: 'name22', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
//   {name: 'name1', id: 1},
// ];