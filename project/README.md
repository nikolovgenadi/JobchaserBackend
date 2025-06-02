Vad är Redux Toolkit?

En verktyg som förenklar arbetet med global state i React t.ex. man fpr färdiga funktioner att använda för api anrop, store och reducers för state ändring.

När, i vilka situationer vill man använda Redux Toolkit?

När man använder global shared state, man vill skapa någon typ av sortering, sökfilter eller kategorier som ska kunna anvnädas ut av flera komponenter. Vid också mycket api data som ska delas och uppdateras i flera delar av appen eller för att spara användarinfo, inloggningar och dark-mode i hela appen.

Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)

Man avnäder typer för att berätta vilka värden som komponenten ska förvänta sig som i t.ex props/interface från projektet:
här ska den förvänta sig att search query är en string och setSearchQuery funktion som tar emot string
interface NavbarProps {
searchQuery: string;
setSearchQuery: (value: string) => void;
}
När vi använder t.ex. useState där vi kanske har ett null initialvärde pga TS kan inte alltid lista typen när initialvärdet är null.
usereducer använder vi när man har t.ex. "union" av actions där man vill ha ett säkert flöde med endast de tillåtna actions, man får direkt återkoppling om man missad case eller använder fel typ.

I stort sätt är hela typescript med anledningen att få rätt typ och få direkt återkoppling i kodskrivaren för att undvika buggar pga fel data typer.
