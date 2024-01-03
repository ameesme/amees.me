"use client";

import { Blockquote, Heading, Paragraph } from "@/components/Typography";
import Dash from "@/components/atoms/Dash";
import Card from "@/components/molecules/Card";
import CardsContainer from "@/components/templates/CardsContainer";
import Container from "@/components/templates/Container";
import Section from "@/components/templates/Section";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
// const WorkSans = Work_Sans({
//   weight: ["500"],
//   subsets: ["latin"],
// });
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <Container>
        <Section>
          <div className="relative w-[300px] h-[230px] max-w-full aspect-auto rounded-[10px] shadow-light mb-4">
            <Image
              src="/mees.jpg"
              alt="Portrait photo of myself"
              className="object-cover rounded-[10px]"
              fill
            />
          </div>
          <Heading variant="title">Mees Boeijen</Heading>
          <Heading variant="subtitle">
            Indie app developer, digital product engineer.
          </Heading>
          <Paragraph>
            The best digital products are those where Product Design and
            Software Architecture are built in complete harmony.
          </Paragraph>
          <Paragraph>
            With over 10 years of experience as a software-entrepreneur, I can
            help you build these products, with rocket-speed.
          </Paragraph>
          <Dash className="mt-8" />
        </Section>
        <Section>
          <Heading variant="h1">Mobile Application Development</Heading>
          <Blockquote>
            Getting mobile-applications to market quickly is my craft and what I
            love doing most.
          </Blockquote>
          <Paragraph>
            Too many great ideas die on notepads -or more often- in the back of
            the heads of creative minds, to never see the light of day. Over the
            years, I have learned what it takes to turn these ideas into great
            apps in no-time, so they can be validated and enjoyed in the real
            world.
          </Paragraph>
          <CardsContainer>
            <Card
              title="Idea"
              description="Going from an idea to a clear product-definition."
              onClick={() => {}}
            />
            <Card
              title="Plan"
              description="Create an ironclad product-development plan and team."
              onClick={() => {}}
            />
            <Card
              title="Guide"
              description="Guide your team in making your product come to life..."
              onClick={() => {}}
            />
            <Card
              title="Build"
              description="...or getting our own hands dirty, building your product together."
              onClick={() => {}}
            />
          </CardsContainer>
          <Dash className="mt-8" />
        </Section>
        <Section>
          <Heading variant="h1">Product Development Consultancy</Heading>
          <Paragraph>
            Need someone to brainstorm with? An extra pair of eyes to assess the
            viability and risks of a new opportunity? Or just some guidance in
            the woods of technology?
          </Paragraph>
          <Paragraph>
            Nothing gets me more excited than working with entrepreneurs to make
            their ideas and ambitions come true.
          </Paragraph>
          <Dash className="mt-8" />
        </Section>
        <Section>
          <Heading variant="h1">Experience</Heading>
          <Section className="mb-[30px]">
            <Heading variant="h2">Technologies</Heading>
            <CardsContainer>
              <Card
                title="Web"
                description="10 years of experience in web-application development."
                onClick={() => {}}
              />
              <Card
                title="Mobile"
                description="Expert in React Native with a design-background."
                onClick={() => {}}
              />
            </CardsContainer>
          </Section>
          <Section className="mb-[30px]">
            <Heading variant="h2">Interpersonal</Heading>
            <CardsContainer>
              <Card
                title="Leadership"
                description="6 years of experience as a tech-lead as a startup co-founder."
                onClick={() => {}}
              />
            </CardsContainer>
          </Section>
          <Section className="mb-[30px]">
            <Heading variant="h2">Interests</Heading>
            <CardsContainer>
              <Card
                title="Infrastructure"
                description="Everything from networking to data-security and bare-metal."
                onClick={() => {}}
              />
              <Card
                title="3D"
                description="Exploring the depths of physical product design."
                onClick={() => {}}
              />
              <Card
                title="Sustainability"
                description="Animal rights activist and environmentalist."
                onClick={() => {}}
              />
            </CardsContainer>
          </Section>
          <Dash className="mt-16" />
        </Section>
      </Container>
    </main>
  );
}
