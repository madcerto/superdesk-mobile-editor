import { useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import ContentSidebar from './ContentSidebar.tsx';

const SAMPLE_ARTICLE = `An act of arson prompted the emergency evacuation of hundreds of students living in Race Hall, one of Drexel University's predominantly freshman residence halls on Oct. 10. A widely circulated post on Instagram stated that the attack was due to Jewish decorations on one of the doors and the dorm was targeted because of the Jewish identity of one of the residents, raising concerns about antisemitic bias and hate crimes on campus. 

According to a freshman biology student, Lahari Suraparaju, who was present at Race Hall during the time of the fire, there is video footage that captured smoke encompassing the hall, confirming the timeline of events. Two to three people were inside the suite when the fire broke out; one of them was Jewish. A recent Instagram post from the cousin of the student stated she was targeted because of her support for Israel and a family member in the Israeli Defense Forces. 

Suraparaju indicated the presence of numerous police officers. Over an hour passed before the students were allowed back into their dorms. Resident Assistants questioned the students of the affected floor, seeking information that might aid in the investigation.

In the aftermath of the arson, President John Fry issued a statement on Oct. 11 addressing the incident and emphasizing the university's commitment to a diverse and inclusive community, but administration declined to provide more specific details on the event, though they did acknowledge there is an ongoing investigation into this disturbing incident.

“As a campus community, we need to maintain an environment of mutual respect that supports the free expression of ideas through civil discussion and peaceful protest while facilitating deep and authentic exploration of complex issues…At the same time, there is a line between expressing strong opinions through robust discussion, debate, and peaceful protest — and targeting any individual for discrimination, intimidation, or hate. Unfortunately, we were made aware of a distressing situation that included destruction inside one of our residence halls. Thankfully, no one was injured. We are investigating to determine if bias, discrimination, or hate, which we do not tolerate at Drexel, was the motivation behind this incident,” wrote President Fry.
A few days after the Race Hall incident and shortly before the start of Shabbat on Oct. 13 it was reported that the words “F–– the Jews” were written in a Drexel academic building women’s bathroom.

President Fry sent out another email to the student body on Oct. 14 saying, “This cowardly and reprehensible act violates our core principles and the code of conduct by which we all agree to abide as members of this community. Hateful acts like this diminish our sense of safety and security.”

“Hearing about a swastika on campus, it is likely some of you are feeling unsafe, unwelcome, or alone. Indeed, that’s likely the very goal of whomever drew the swastika - to make us feel these things,” said Rabbi Isabel in a letter to the Drexel Hillel community in response to the incident. “I want to suggest that we are both entitled to these feelings and that we have the power to also create different feelings - safety, belonging, and love - within ourselves and within our wider Drexel community.”
`;


export default function Content() {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText(SAMPLE_ARTICLE)));

  return <div className="flex sm:flex-row">
    <ContentSidebar />
    <div className="max-w-[816px] bg-white border-neutral-primary-3 border-[1px] sm:p-20 p-12 whitespace-pre-line">
      <Editor editorState={editorState} onChange={setEditorState}/>
    </div>
  </div>;
}
