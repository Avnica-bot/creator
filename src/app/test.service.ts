import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Calculator {
  add(m: number, n: number) {
    return m + n;
  }
  subtract(m: number, n: number) {
    return m - n;
  }
}