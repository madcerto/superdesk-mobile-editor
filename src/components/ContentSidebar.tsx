import { useState } from 'react';
import expandIcon from "../assets/noun-expand-1983614.svg";
import collapseIcon from "../assets/noun-collapse-1121486.svg";

export default function ContentSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return <div className={(collapsed ? "" : "w-96 ") + "flex flex-col gap-4 lg:px-6 px-2 sm:relative fixed shrink"}>
    <div className="p-4 rounded-full hover:bg-neutral-primary-2 w-fit" onClick={() => setCollapsed(!collapsed)}>
      <img src={collapsed ? expandIcon : collapseIcon} className="h-6 w-6 max-w-fit"/>
    </div>
    <div className={"flex flex-col gap-4" + (collapsed ? " hidden" : "")}>
      <div className="flex flex-row gap-2">
        <div className=" flex flex-col gap-5 justify-end items-center">
          <label htmlFor="td-meta-slugline" className="bg-neutral-primary-4 px-2 w-full rounded text-white text-sm text-center">SLUGLINE</label>
          <label htmlFor="td-meta-category" className="bg-neutral-primary-4 px-2 w-full rounded text-white text-sm text-center">CATEGORY</label>
          <label htmlFor="td-meta-keywords" className="bg-neutral-primary-4 px-2 w-full rounded text-white text-sm text-center">KEYWORDS</label>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-end">
          <input id="td-meta-slugline" className="w-full bg-inherit text-md border-b-2 border-neutral-primary-3 hover:border-primary-800 focus:border-primary-800 focus:outline-0"/>
          <input id="td-meta-category" className="w-full bg-inherit text-md border-b-2 border-neutral-primary-3 hover:border-primary-800 focus:border-primary-800 focus:outline-0"/>
          <input id="td-meta-keywords" className="w-full bg-inherit text-md border-b-2 border-neutral-primary-3 hover:border-primary-800 focus:border-primary-800 focus:outline-0"/>
        </div>
      </div>
      <hr className="border-neutral-primary-4"/>
      <div>
        <p className="bg-neutral-primary-4 px-2 mb-2 w-fit rounded text-white text-sm">BYLINE</p>
        <input className="w-full bg-inherit text-lg border-b-2 border-neutral-primary-3 hover:border-primary-800 focus:border-primary-800 focus:outline-0"/>
      </div>
    </div>
  </div>;
}
