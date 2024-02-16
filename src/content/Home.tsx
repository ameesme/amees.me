"use client";

import { Blockquote, Heading, Paragraph } from "@/components/Typography";
import Button from "@/components/atoms/Button";
import Dash from "@/components/atoms/Dash";
import Availability from "@/components/molecules/Availability";
import Card from "@/components/molecules/Card";
import CardsContainer from "@/components/templates/CardsContainer";
import Container from "@/components/templates/Container";
import Section from "@/components/templates/Section";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { LuChevronRight } from "react-icons/lu";

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const HomeContent: FC<Props> = ({ children, className, ...rest }) => {
  const pathName = usePathname();
  const showChildren = pathName !== "/";
  return (
    <main
      className={classNames(
        "overflow-y-auto transition-all duration-200 relative w-full flex",
        showChildren ? "overflow-y-hidden" : "",
        className
      )}
      {...rest}
    >
      <Container isInactive={showChildren}>
        <Section>
          <div className="relative max-w-full mb-4 mt-[-80px] ml-[-32px]">
            <Image
              src="/am-square.png"
              alt="3D logo illustration"
              width={125}
              height={125}
              className="mix-blend-multiply"
            />
          </div>
          <div className="relative w-[250px] h-[200px] max-w-full rounded-[10px] shadow-light mb-4">
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
              href="/schedule-call"
            />
            <Card
              title="Plan"
              description="Create an ironclad product-development plan and team."
              onClick={() => {}}
            />
          </CardsContainer>
          <CardsContainer>
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
            <Paragraph>I pride myself on my ...</Paragraph>
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
            <Paragraph>
              I am passionate about many things not (directly) related to
              software engineering and prefer to work on projects that include
              one or more of these topics.
            </Paragraph>
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
            </CardsContainer>
            <CardsContainer>
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
      <div
        className={classNames(
          "fixed h-min-screen w-[790px] lg:max-w-full max-w-[calc(100%-50px)] h-full top-0 space-y-[220px] bg-background shadow-deep overflow-y-auto py-20 px-10 lg:py-40 lg:pl-32 lg:pr-20 transition-all duration-500",
          showChildren
            ? "translate-x-0 left-[50px] opacity-100"
            : "translate-x-[100%] left-[0px] opacity-0",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </main>
  );
};
export default HomeContent;
