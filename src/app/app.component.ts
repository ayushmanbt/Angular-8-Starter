import { Component } from "@angular/core";
import { TestServiceService } from "./test-service.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  response;
  title = "boilerplate-app";
  constructor(private Service: TestServiceService) {
    this.Service.getResponse().subscribe(data => {
      this.response = data;
      console.log(data);
    });
  }
}
