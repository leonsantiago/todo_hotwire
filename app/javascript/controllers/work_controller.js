import { Controller } from "@hotwired/stimulus";

export  default class extends Controller {
  static targets = ["title"]

  complete() {
    this.titleTarget.classList.toggle("line-through")
  }
}
