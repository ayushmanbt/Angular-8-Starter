import { Component } from "@angular/core";
import { TestServiceService } from "./test-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  response;
  graph;
  imageURI: String;

  processImage(blob) {
    var objectURI = URL.createObjectURL(blob);
    return objectURI;
  }

  title = "boilerplate-app";
  constructor(private Service: TestServiceService) {
    this.Service.getResponse().subscribe(data => {
      this.response = data;
      console.log(data);
    });
    this.Service.getGraph().subscribe(data => {
      this.graph = data;
      this.imageURI = this.processImage(data);
      var temp = this.imageURI.substring(5, this.imageURI.length);

      console.log(temp);
      console.log(data);
    });
  }
}
