import { Component } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  response: Observable<any>;
  selectedFileOne: File = null;
  selectedFileTwo: File = null;
  constructor(private http: HttpClient) {}
  onFileOneSelected(eventOne) {
    this.selectedFileOne = eventOne.target.files;
    const placeholderName = document.getElementById("placeOne");
    placeholderName.value = this.selectedFileOne[0].name;
    const fontOne = document.getElementById("firstFont");
    fontOne.className = "fa fa-cloud-upload";
    const imageOne = document.getElementById("imageOne");
    imageOne.src = URL.createObjectURL(this.selectedFileOne[0]);
  }
  onFileTwoSelected(event) {
    this.selectedFileTwo = event.target.files;
    const placeholderName = document.getElementById("placeTwo");
    placeholderName.value = this.selectedFileTwo[0].name;
    const fontOne = document.getElementById("secondFont");
    fontOne.className = "fa fa-cloud-upload";
    const imageTwo = document.getElementById("imageTwo");
    imageTwo.src = URL.createObjectURL(this.selectedFileTwo[0]);
  }
  onUpload() {
    const fd = new FormData();
    fd.append(
      "imageOne",
      this.selectedFileOne[0],
      this.selectedFileOne[0].name
    );
    fd.append(
      "imageTwo",
      this.selectedFileTwo[0],
      this.selectedFileTwo[0].name
    );
    this.response = this.http.post("", fd);
    // console.log(fd);
  }
}
