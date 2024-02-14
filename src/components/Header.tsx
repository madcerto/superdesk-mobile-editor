import UndoIcon from '../assets/noun-undo-3557666.svg';
import LinkIcon from '../assets/noun-link-1655587.svg';
import CommentIcon from '../assets/noun-comment-1176539.svg';
import AnnotateIcon from '../assets/noun-draw-4684250.svg';
import ImageIcon from '../assets/noun-image-6562392.svg';
import BListIcon from '../assets/noun-to-do-3923684.svg';
import NListIcon from '../assets/noun-numbered-list-4921110.svg';
import FormatIcon from '../assets/noun-text-remove-format-120485.svg';

export default function Header() {
  return <div className="sticky top-0 w-full bg-neutral-primary-1">
    <div className="m-4 flex items-center gap-2">
      <p className="bg-secondary-3 p-1 px-3 w-fit rounded text-black text-sm font-bold">OPINION / AUTHORING</p>
      <input
        value="Arson and antisemitic graffiti heighten fears of hate crime on Drexel campus"
        className="
          flex-1 bg-inherit text-2xl
          border-neutral-primary-1 border-b-2 hover:border-neutral-primary-2 focus:border-primary-800 focus:outline-0
        "
      />
      <button className="text-md text-red-800 font-bold p-1">CLOSE</button>
      <button className="text-md text-primary-800 font-bold p-1 pr-2">SAVE</button>
      <button className="rounded bg-purple-800 text-md text-neutral-primary-1 p-1 px-3">SEND</button>
    </div>
    <div className="bg-primary-200 h-10 sm:m-4 m-2 rounded-full flex items-center px-4 gap-2 font-mono text-xl">
      <img src={UndoIcon} className="h-8 rounded hover:bg-neutral-primary-2" />
      <img src={UndoIcon} className="scale-x-[-1] h-8 rounded hover:bg-neutral-primary-2" />
      <button className="px-2 rounded hover:bg-neutral-primary-2 text-lg">100%</button>
      <div className="h-6 border-r-[1px] border-neutral-primary-4" />
      <button className="font-bold px-2 rounded hover:bg-neutral-primary-2">B</button>
      <button className="italic px-2 rounded hover:bg-neutral-primary-2">I</button>
      <button className="underline px-2 rounded hover:bg-neutral-primary-2">U</button>
      <div className="h-6 border-r-[1px] border-neutral-primary-4" />
      <img src={LinkIcon} className="h-6 px-2 rounded hover:bg-neutral-primary-2" />
      <img src={CommentIcon} className="h-8 px-2 rounded hover:bg-neutral-primary-2" />
      <img src={AnnotateIcon} className="h-7 px-1 rounded hover:bg-neutral-primary-2" />
      <img src={ImageIcon} className="h-8 px-2 rounded hover:bg-neutral-primary-2" />
      <div className="h-6 border-r-[1px] border-neutral-primary-4" />
      <img src={BListIcon} className="h-7 p-1 px-2 rounded hover:bg-neutral-primary-2" />
      <img src={NListIcon} className="h-7 p-1 px-2 rounded hover:bg-neutral-primary-2" />
      <button className="line-through px-2 rounded hover:bg-neutral-primary-2">T</button>
    </div>
  </div>;
}
