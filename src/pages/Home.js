import axios from "../utils/axios";
import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import SimpleListMenu from '../components/Selectbox'
import {
  Grid,
  Button,
  Container,
  AppBar,
  Typography,
  Toolbar,
  MenuItem,
  Divider,
  Menu,
  Avatar
} from "@material-ui/core";

function Home() {
  const [name, setName] = useState("Eric")
  const [title, setTitle] = useState("Search Plan")

  const datas = [
    {
      type: 'select',
      header: "Plan Code",
      name: "code",
      options: [
        "---Select---",
        "one",
        "two",
        "three"
      ]
    },
    {
      type: 'select',
      header: "Plan Name",
      name: "name",
      options: [
        "---Select---",
        "one",
        "two",
        "three"
      ]
    },
    {
      type: 'input',
      header: "Client Name",
      name: "client",
    },
    {
      type: 'select',
      header: "Program Name",
      name: "program",
      options: [
        "---Select---",
        "one",
        "two",
        "three"
      ]
    },
    {
      type: 'select',
      header: "Record",
      name: "record",
      options: [
        "---Select---",
        "one",
        "two",
        "three"
      ]
    },
    {
      type: 'select',
      header: "Status",
      name: "status",
      options: [
        "---Select---",
        "one",
        "two",
        "three"
      ]
    }
  ]

  const handleSelect = (res) => {
    console.log("Test:", res);
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" >
        Welcome, {name}
      </Typography>
      <Typography id="title" variant="h4" >{title}</Typography>

      <Grid container spacing={4} style={{ paddingTop: 50 }}>
        {datas.map((data) => {
          return (
            <Grid item xs={3}>
              <SimpleListMenu data={data} handleSelect={handleSelect}></SimpleListMenu>
            </Grid>
          )
        })}

      </Grid>

      <Button variant="contained" color="primary" style={{ margin: 20 }}>Search</Button>
      <Button variant="contained" color="primary" style={{ margin: 20 }}>Clear</Button>
    </Container>
  );
}

export default Home;
