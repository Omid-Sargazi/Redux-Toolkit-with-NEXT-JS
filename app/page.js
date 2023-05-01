"use client";
import Image from "next/image";
import Counter from "./componente/counter";
import { Provider } from "react-redux";
import store from "./store/store";
import { Fragment } from "react";
import Post from "./componente/post";
export default function Home() {
  return (
    <Fragment>
      <div className="text-3xl text-center mt-10 text-amber-600 hover:text-amber-800">
        <Provider store={store}>
          Redux Toolkit
          <Counter />
          <Post />
        </Provider>
      </div>
    </Fragment>
  );
}
