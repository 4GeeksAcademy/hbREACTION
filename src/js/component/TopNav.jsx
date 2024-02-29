import React from "react";

export function TopNav (props) { 
    return (<ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active" aria-current="home" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Contact</a>
    </li>
  </ul>);
}
