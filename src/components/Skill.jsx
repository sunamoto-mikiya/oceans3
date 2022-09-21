import styled from "@emotion/styled";
import { InputLabel, MenuItem, Select } from "@mui/material";

const SkillSection = styled('div')({
    display: "flex",
    justifyContent: "center",
})

const SkillSelector = styled('div')({
    width: "300px",
})

const LevelSelector = styled('div')({
    width: "100px",
})

export default function Skill({ options, name, level, setSkill }) {
    const nameHandler = (event) => {
        setSkill({name: event.target.value, level: level})
    }

    const levelHandler = (event) => {
        setSkill({name: name, level: event.target.value})
    }

    return (
        <SkillSection>
            <SkillSelector>
                <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="name"
                    sx={{
                        maxWidth: "300px",
                        width: "80%",
                    }}
                    onChange={(event) => nameHandler(event)}
                >
                    <MenuItem value=''></MenuItem>
                    {options.map(item => {
                        return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                    })}
                </Select>
            </SkillSelector>
            <LevelSelector>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    label="level"
                    autoWidth
                    onChange={(event) => levelHandler(event)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </LevelSelector>
        </SkillSection>
    )
}
