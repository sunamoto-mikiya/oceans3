import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../api/oceans";
import { getDatabases, getFrameworks, getLanguages, getServices, getUserDatabases, getUserFrameworks, getUserLanguages, getUserServices } from "../api/skill";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skill from "../components/Skill";


const Container = styled('div')({
    width: "80%",
    margin: "20px auto",
});

const Section = styled('div')({
    width: "90%",
    maxWidth: "500px",
    margin: "20px auto",
})

const DateSection = styled('div')({
    width: "90%",
    margin: "20px auto",
    textAlign: "center",
})

const AlignSection = styled('div')({
    textAlign: "center",
})

export default function Form() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [affiliation, setAffiliation] = useState('')
    const [birthDate, setBirthDate] = useState(null)
    const [github, setGithub] = useState('')
    const [userImage, setUserImage] = useState()
    const [languages, setLanguages] = useState([])
    const [frameworks, setFrameworks] = useState([])
    const [databases, setDatabases] = useState([])
    const [services, setServices] = useState([])
    const [language1, setLanguage1] = useState({name: '', level: 1})
    const [language2, setLanguage2] = useState({name: '', level: 1})
    const [language3, setLanguage3] = useState({name: '', level: 1})
    const [framework1, setFramework1] = useState({name: '', level: 1})
    const [framework2, setFramework2] = useState({name: '', level: 1})
    const [framework3, setFramework3] = useState({name: '', level: 1})
    const [database1, setDatabase1] = useState({name: '', level: 1})
    const [database2, setDatabase2] = useState({name: '', level: 1})
    const [database3, setDatabase3] = useState({name: '', level: 1})
    const [service1, setService1] = useState({name: '', level: 1})
    const [service2, setService2] = useState({name: '', level: 1})
    const [service3, setService3] = useState({name: '', level: 1})

    const [nameError, setNameError] = useState(false)

    // api
    // skills取得
    // user取得
    useEffect(() => {
        const init = async() => {
            const fetchedLanguages = await getLanguages()
            const fetchedFrameworks = await getFrameworks()
            const fetchedDatabases = await getDatabases()
            const fetchedServices = await getServices()
            setLanguages(fetchedLanguages);
            setFrameworks(fetchedFrameworks);
            setDatabases(fetchedDatabases);
            setServices(fetchedServices);

            const fetchedUserLanguages = await getUserLanguages(2)
            const fetchedUserFrameworks = await getUserFrameworks(2)
            const fetchedUserDatabases = await getUserDatabases(2)
            const fetchedUserServices = await getUserServices(2)
            setLanguage1(fetchedUserLanguages[0])
            setLanguage2(fetchedUserLanguages[1])
            setLanguage3(fetchedUserLanguages[2])
            setFramework1(fetchedUserFrameworks[0])
            setFramework2(fetchedUserFrameworks[1])
            setFramework3(fetchedUserFrameworks[2])
            setDatabase1(fetchedUserDatabases[0])
            setDatabase2(fetchedUserDatabases[1])
            setDatabase3(fetchedUserDatabases[2])
            setService1(fetchedUserServices[0])
            setService2(fetchedUserServices[1])
            setService3(fetchedUserServices[2])
        }
        init()
        store()
    }, [])

    const submitHandler = async() => {
        const data = new FormData();
        data.append('user_name', userName)
        data.append('affiliation', affiliation)
        data.append('birth_date', birthDate ? `${birthDate.$y}-${birthDate.$M + 1}-${birthDate.$D}` : '')
        data.append('github', github)
        data.append('user_image', userImage)
        data.append('languages', JSON.stringify([
            {name: language1.name, level: language1.level},
            {name: language2.name, level: language2.level},
            {name: language3.name, level: language3.level},
        ]))
        data.append('frameworks', JSON.stringify([
            {name: framework1.name, level: framework1.level},
            {name: framework2.name, level: framework2.level},
            {name: framework3.name, level: framework3.level},
        ]))
        data.append('databases', JSON.stringify([
            {name: database1.name, level: database1.level},
            {name: database2.name, level: database2.level},
            {name: database3.name, level: database3.level},
        ]))
        data.append('services', JSON.stringify([
            {name: service1.name, level: service1.level},
            {name: service2.name, level: service2.level},
            {name: service3.name, level: service3.level},
        ]))
        axios.post('http://localhost:81/api/user/2/wanted', data, {
            header: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                alert('変更できませんでした')
                console.log(err)
            })
    }

    const userImageHandler = (event) => {
        const file = event.target.files[0]
        setUserImage(file)
    }

    return (
        <>
            <Header />
            {/* <h1>プロフィール入力</h1> */}
            {/* <h2>名前 (ローマ字)</h2> */}
            <Container>
                <Section>
                <TextField
                    error={nameError}
                    id="outlined-basic"
                    fullWidth
                    label="名前 (ローマ字)"
                    variant="outlined"
                    inputProps={{pattern: "^[a-zA-Z0-9_]+$"}}
                    defaultValue={userName}
                    onChange={(event) => {
                        setUserName(event.target.value)
                        if (userName.match('^[a-zA-Z0-9!-/:-@¥[-`{-~]*$') === null) {
                            setNameError(true)
                        } else {
                            setNameError(false)
                        }
                    }}
                />
                </Section>
                {/* <h2>所属</h2> */}
                <Section>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    label="所属"
                    variant="outlined"
                    defaultValue={affiliation}
                    onChange={(event) => setAffiliation(event.target.value)}
                />
                </Section>
                {/* <h2>GitHubリンク</h2> */}
                <Section>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    label="GitHubリンク"
                    variant="outlined"
                    defaultValue={github}
                    onChange={(event) => setGithub(event.target.value)}
                />
                </Section>
                {/* <h2>誕生日</h2> */}
                <DateSection>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="誕生日"
                        value={birthDate}
                        onChange={(newValue) => {
                        setBirthDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </DateSection>
                <AlignSection>
                {/* <h2>プロフィール画像</h2> */}
                <label for="user_image">プロフィール画像</label> <br/>
                <input id="user_image" type="file" onChange={(event) => userImageHandler(event)} />
                </AlignSection>

                <AlignSection>

                <h2>技術スタック</h2>
                <h3>言語</h3>
                <Skill options={languages} name={language1.name} level={language1.level} setSkill={setLanguage1} />
                <Skill options={languages} name={language2.name} level={language2.level} setSkill={setLanguage2} />
                <Skill options={languages} name={language3.name} level={language3.level} setSkill={setLanguage3} />
                <h3>フレームワーク</h3>
                <Skill options={frameworks} name={framework1.name} level={framework1.level} setSkill={setFramework1} />
                <Skill options={frameworks} name={framework2.name} level={framework2.level} setSkill={setFramework2} />
                <Skill options={frameworks} name={framework3.name} level={framework3.level} setSkill={setFramework3} />
                <h3>データベース</h3>
                <Skill options={databases} name={database1.name} level={database1.level} setSkill={setDatabase1} />
                <Skill options={databases} name={database2.name} level={database2.level} setSkill={setDatabase2} />
                <Skill options={databases} name={database3.name} level={database3.level} setSkill={setDatabase3} />
                <h3>サービス</h3>
                <Skill options={services} name={service1.name} level={service1.level} setSkill={setService1} />
                <Skill options={services} name={service2.name} level={service2.level} setSkill={setService2} />
                <Skill options={services} name={service3.name} level={service3.level} setSkill={setService3} />

                <Button variant="contained" sx={{marginTop: "50px"}} onClick={submitHandler} disabled={nameError}>変更</Button>
                </AlignSection>
            </Container>
            <Footer />
        </>
    )
}
