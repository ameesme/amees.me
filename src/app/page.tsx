import { Blockquote, Heading, Paragraph } from "@/components/Typography";
import Dash from "@/components/atoms/Dash";
import Container from "@/components/templates/Container";
import Section from "@/components/templates/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <Container>
        <Section>
          <div className="relative w-[300px] h-[230px] rounded-[10px] shadow-light mb-4">
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
          <Heading variant="h2">Technologies</Heading>
          <Heading variant="h2">Interpersonal</Heading>
          <Heading variant="h2">Interests</Heading>
          <Dash className="mt-8" />
        </Section>
      </Container>
    </main>
  );
}
