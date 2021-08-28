import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';
import { useState } from "react";
import {SpeakerFilterProvider} from "../contexts/SpeakerFilterContext";

function Speakers() {
  const [showSessions, setShowSessions] = useState(true);
  return(
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar/>
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;