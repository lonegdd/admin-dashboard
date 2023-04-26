import React from 'react';
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Topbar} from "./scenes/global/Topbar";
import {Dashboard} from "./scenes/dashboard";
import {Route, Routes} from 'react-router-dom';
import {Sidebar} from "./scenes/global/Sidebar";
import {Team} from "./scenes/teams";
import {Contacts} from "./scenes/contacts/contacts";
import {Invoices} from "./scenes/Invoices";
import {Form} from "./scenes/form";
import {Bar} from "./scenes/Bar";
import {Geography} from "./scenes/geography";
import {Line} from "./scenes/line";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={"app"}>
                    <Sidebar/>
                    <main className={"content"}>
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            {/*<Route path="/pie" element={<Pie />} />*/}
                            <Route path="/line" element={<Line />} />
                            {/*<Route path="/faq" element={<FAQ />} />*/}
                            {/*<Route path="/calendar" element={<Calendar />} />*/}
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
