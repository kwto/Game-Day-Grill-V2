'use client'
import storeItems from "@/src/store/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "@/src/comps/StoreItems";
import {Footer} from "@/src/comps/Footer";
import React from "react";
import {NavBarStore} from "@/src/comps/NavBarStore";

export default function Home() {
  return (
    <>
      <NavBarStore />
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
        <Footer />
    </>
  )
};

/*
const PopupButtonCAQ = () => {
  const openPopup = () => {
    const popup = window.open(
      "customize/cAndQ",
      "Popup",
      "width=275,height=250"
    );
    if (window.focus) popup.focus();
  };
  return (
    <button onClick={openPopup} className="rounded-button margin-right">
      Customize
    </button>
  );
};

const PopupButtonMZZ = () => {
  const openPopup = () => {
    const popup = window.open(
      "customize/MozStick",
      "Popup",
      "width=275,height=250"
    );
    if (window.focus) popup.focus();
  };
  return (
    <button onClick={openPopup} className="rounded-button ">
      Customize
    </button>
  );
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={backgroundImage} alt="Background" layout="responsive" width={1920} height={1080} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '16.5%' }}>
        <PopupButtonCAQ />
        <PopupButtonMZZ />
      </div>
      <Footer />
    </div>
  );
};


 */