import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log(request);
  console.log("this is proxy");
}
