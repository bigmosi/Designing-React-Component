import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function  SpeakerFilterProvider ({ children,startingShowSessions = false }) {
    const { showSessions,setShowSessions } = useSpeakerFilter(
        startingShowSessions
    );

    return (
        <SpeakerFilterContext.provider
            value={
                { showSessions, setShowSessions }
            }
        >
            {children}
        </SpeakerFilterContext.provider>
    );
}

export { SpeakerFilterContext, SpeakerFilterProvider };