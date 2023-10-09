import { Button, Link } from "@nextui-org/react";
import { Unica_One } from "next/font/google";
import Image from "next/image";
import libertyAssured from "../public/Liberty company logo white colour.svg";
import Libertypay from "../public/Liberty company logo white.svg";
import paybox from "../public/Paybox.svg";
import visualz from "../public/Vizual Plus.svg";
import winwise from "../public/Winwise logo White colour 1.svg";
import bang from "../public/bang.svg";
import bronze from "../public/bronze_medal 1.svg";
import bubbles from "../public/bubbles.svg";
import bulb from "../public/bulb.svg";
import chain from "../public/chain-9365116-7621444.svg";
import curverArrow from "../public/curved arrow.svg";
import manOnCloud from "../public/cwok_casual_21 1.svg";
import facebook from "../public/facebook.svg";
import fadedQ from "../public/faded qus.svg";
import goldcup from "../public/gold trophy.svg";
import goldmedal from "../public/gold_medal 1.svg";
import listicon from "../public/list terms.svg";
import location from "../public/location.svg";
import man from "../public/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import instagram from "../public/mdi_instagram.svg";
import padlockman from "../public/open security.svg";
import PeopleStanding from "../public/ppl standing.svg";
import questionMark from "../public/question mark.svg";
import redCurve from "../public/red curve.svg";
import linkedIn from "../public/ri_linkedin-fill.svg";
import securityIcon from "../public/security.svg";
import silvermedal from "../public/silver_medal 1.svg";
import purpleStar from "../public/star purple.svg";
import telephone from "../public/telephone.svg";
import innovationBulb from "../public/the big idea 1.svg";
import darkStar from "../public/tiny-star.svg";
import whiteStar from "../public/white-star.svg";
import wisper from "../public/wisper logo white.svg";
import womanSitting from "../public/woman sitting.svg";
import twitter from "../public/x.svg";

const unica = Unica_One({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex w-full  m-auto">
      <div className="flex flex-col items-center pt-20 w-full ">
        <div className="m-auto lg:pr-20 px-6 w-full max-w-[1368px]">
          <p className=" ml-auto w-fit font-semibold text-[26px] text-right">
            <i>Igniting a Revolution in HR Innovation</i>
          </p>
          <Image
            src={redCurve}
            width={160}
            height={50}
            alt="redcurve"
            className="ml-auto"
          />
        </div>
        <section className=" w-full border-b border-white border-opacity-10 lg:pb-20 lg:pl-[74px] px-2">
          <div className="flex flex-col lg:flex-row max-w-[1368px] justify-end items-center m-auto">
            <div className="flex-col gap-5 flex w-fit lg:mr-auto">
              <div className="flex-col flex px-6 pr-[110px] gap-10 -mb-7">
                <Image src={whiteStar} width={15} height={15} alt="bulb" />

                <Image
                  src={bulb}
                  width={35}
                  height={35}
                  alt="bulb"
                  className="ml-auto float-right"
                />
              </div>
              <div className=" text-[50px] font-extrabold flex flex-col gap-0 text-center lg:text-left">
                <h1 className=" break-words">getlinked Tech</h1>
                <div className="flex flex-wrap">
                  <h2>
                    Hackathon <span className="text-[#D434FE]">1.0</span>
                  </h2>
                  <div className="flex mx-auto">
                    <Image
                      src={chain}
                      width={50}
                      height={50}
                      alt="chain"
                      className="mt-4 "
                    />
                    <Image
                      src={bang}
                      width={50}
                      height={50}
                      alt="chain"
                      className="mt-0 "
                    />
                  </div>
                </div>
              </div>
              <p className="text-center lg:text-left">
                Participate in getlinked tech Hackathon 2023 stand <br />a
                chance to win a Big prize
              </p>
              <Button
                as={Link}
                href="#"
                radius="none"
                className=" register m-auto lg:m-0"
              >
                Register
              </Button>
              <div className="max-w-[300px] pt-0">
                <Image
                  src={darkStar}
                  width={16}
                  height={16}
                  alt="dark star"
                  className="ml-auto"
                />
              </div>
              <div
                className={`${unica.className} flex gap-4 justify-center lg:justify-start`}
              >
                <p className="text-5xl">
                  00<sub className="text-xs bottom-[0] ">H</sub>
                </p>
                <p className="text-5xl">
                  00<sub className="text-xs bottom-[0] ">M</sub>
                </p>
                <p className="text-5xl">
                  00<sub className="text-xs bottom-[0] ">S</sub>
                </p>
              </div>
            </div>

            <div className="justify-end flex flex-col">
              <Image
                src={man}
                priority
                width={100}
                height={100}
                alt="man with glasses"
                className="w-[80%] m-auto lg:ml-auto lg:-mt-[18px] "
              ></Image>

              <Image
                src={bubbles}
                width={100}
                height={100}
                alt="bubble"
                className="absolute lg:relative  mr-0 lg:m-auto lg:-mt-[549px] lg:mr-[90px] w-[60%]"
              ></Image>
            </div>
          </div>
        </section>

        <section className=" w-full border-b border-white border-opacity-10 py-10 px-[25px] lg:px-[74px]">
          <div className="flex flex-col gap-3 text-center lg:gap-0 lg:flex-row lg:text-left max-w-[1368px] justify-end items-center m-auto px-4">
            <div className="flex">
              <div className="max-h-[200px] w-fit flex flex-col justify-center items-center">
                <Image
                  className="items-center"
                  src={purpleStar}
                  width={20}
                  height={20}
                  alt="purple circle"
                />
              </div>

              <Image
                src={innovationBulb}
                width={100}
                height={100}
                alt="innovation bulb "
                className="w-full lg:w-[80%]"
              />
              <div className="flex flex-col justify-end items-end -ml-[20px]">
                <Image
                  src={curverArrow}
                  width={70}
                  height={100}
                  alt="innovation bulb "
                  className="w-[90%]"
                />
              </div>
            </div>

            <div className="max-w-[540px] m-auto flex flex-col gap-[15px] ">
              <div className="flex justify-between pr-4">
                <div className="flex flex-col font-extrabold text-3xl">
                  <p>Introduction to getlinked</p>
                  <p className="text-[#D434FE]">techHackathon 1.0</p>
                </div>
                <Image
                  src={purpleStar}
                  width={20}
                  height={20}
                  alt="purple circle"
                />
              </div>
              <p>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you&apos;re
                a coding genius, a design maverick, or a concept wizard, you&apos;ll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that&apos;s what we&apos;re
                all about!
              </p>
            </div>
          </div>
        </section>

        <section className=" w-full border-b border-white border-opacity-10 py-10  px-[25px] lg:px-[74px]">
          <div className="flex flex-col-reverse text-center lg:text-left lg:flex-row  max-w-[1368px] justify-end items-center m-auto px-4 ">
            <div className="max-w-[570px] w-full m-auto flex flex-col gap-[15px]">
              <div>
                <div className="max-w-[250px] pt-0">
                  <Image
                    src={darkStar}
                    width={26}
                    height={16}
                    alt="dark star"
                    className="ml-auto"
                  />
                </div>
                <div className="font-extrabold text-3xl ">
                  <span>Rules and</span>
                  <br />
                  <span className="text-[#D434FE]">Guidelines</span>
                </div>
              </div>
              <p className="max-w-[600px]">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you&apos;re
                a coding genius,a design maverick, or a concept wizard, you&apos;ll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that&apos;s what we&apos;re
                all about!
              </p>
            </div>
            <Image
              src={womanSitting}
              width={100}
              height={100}
              alt="woman sitting"
              className=" w-full lg:w-[70%] z-[11]"
            />
            <div className="hidden lg:block color-bg w-[130px] h-[130px] rounded-[50%] absolute -mt-[330px] mr-[100px] xl:mr-[137px] xl:-mt-[360px] 2xl:mr-[170px]"></div>
          </div>
        </section>

        <section className=" w-full border-b border-white border-opacity-10  py-16 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex  flex-col text-center lg:text-left lg:flex-row max-w-[1368px] justify-end  m-auto px-4">
            <div>
              <div className="max-w-[330px] lg:pb-20 flex justify-center items-center">
                <Image
                  src={purpleStar}
                  width={25}
                  height={25}
                  alt="purple circle"
                />
              </div>
              <Image
                src={PeopleStanding}
                width={100}
                height={100}
                alt="people standing"
                className="w-[100%] z-[13] relative"
              />
              <div className="hidden lg:block color-bg w-[110px] h-[110px] rounded-[50%] -mt-[460px] ml-[65px] xl:-mt-[570px] xl:ml-[110px] 2xl:ml-[120px] 2xl:-mt-[600px]"></div>
              <div className="max-w-[170px] lg:mt-[200px] m-auto">
                <Image
                  src={darkStar}
                  width={26}
                  height={16}
                  alt="dark star"
                  className="ml-auto  "
                />
              </div>

              <div className="flex flex-col justify-end items-end h-full ml-auto max-w-[300px] w-full max-h-[220px] pr-14 2xl:max-h-[200px]">
                <Image src={whiteStar} width={25} height={25} alt="whitestar" />
              </div>
            </div>

            <div className="flex flex-col gap-16 max-w-[600px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-extrabold">
                  <span>Judging Criteria</span>
                  <br />
                  <span className="text-[#D434FE]">Key attributes</span>
                </h3>

                <div className="">
                  <p className="text-[15px]">
                    <span className="text-[#FF26B9]  text-sm font-medium">
                      Innovation and Creativity:
                    </span>
                    Evaluate the uniqueness and creativity of the solution.
                    Consider whether it addresses a real-world problem in a
                    novel way or introduces innovative features.
                  </p>
                </div>
                <div>
                  <p className="text-[15px]">
                    <span className="text-[#FF26B9] text-sm font-medium">
                      Functionality:
                    </span>
                    Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the
                    solution.
                  </p>
                </div>
                <div>
                  <p className="text-[15px]">
                    <span className="text-[#FF26B9] text-sm font-medium">
                      Impact and Relevance:
                    </span>
                    Determine the potential impact of the solution in the real
                    world. Does it address a significant problem, and is it
                    relevant to the target audience? Judges would assess the
                    potential social, economic, or environmental benefits.
                  </p>
                </div>
                <div>
                  <p className="text-[15px]">
                    <span className="text-[#FF26B9] text-sm font-medium">
                      Technical Complexity:
                    </span>
                    Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of
                    advanced technologies or algorithms, and the scalability of
                    the solution.
                  </p>
                </div>
                <div>
                  <p className="text-[15px]">
                    <span className="text-[#FF26B9] text-sm font-medium">
                      Adherence to Hackathon Rules:
                    </span>
                    Judges will Ensure that the team adhered to the rules and
                    guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other
                    competition-specific requirements.
                  </p>
                </div>
              </div>
              <Button className="register lg:m-0 m-auto">Register</Button>
            </div>
          </div>
        </section>

        <section className=" w-full border-b border-white border-opacity-10  py-16 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row max-w-[1368px] justify-end items-center  m-auto px-4">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <div className="-mt-8 -ml-6">
                  <Image
                    src={purpleStar}
                    width={25}
                    height={25}
                    alt="purple circle"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-3xl font-extrabold">
                    <span>Frequently Ask</span>
                    <br />
                    <span className="text-[#D434FE]">Questions</span>
                  </h4>
                  <p>
                    We got answers to the questions that you might
                    <br />
                    want to ask about
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:w-[430px]">
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>Can I work on a project I started before the hackathon?</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>What happens if I need help during the hackathon?</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>What happens if I don&apos;t have an idea for a project?</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>Can I join a team or do I have to come with one?</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>What happens after the hackathon ends</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
                <div className="py-3 border-b border-b-[#D434FE] flex justify-between gap-4">
                  <p>Can I work on a project I started before the hackathon?</p>
                  <span className="text-[#D434FE] cursor-pointer">+</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <div className="flex gap-[90px] ">
                <Image
                  src={fadedQ}
                  width={40}
                  height={50}
                  alt="question mark"
                  className=" translate-y-7 blur-[0.5px]"
                />

                <Image
                  src={questionMark}
                  width={60}
                  height={50}
                  alt="question mark"
                />
                <Image
                  src={purpleStar}
                  width={25}
                  height={25}
                  alt="purple circle"
                  className="absolute ml-[37px] mt-44 "
                />
                <div>
                  <Image
                    src={purpleStar}
                    width={25}
                    height={25}
                    alt="purple circle"
                    className="absolute -ml-[50px] mt-14 "
                  />
                </div>

                <Image
                  src={fadedQ}
                  width={40}
                  height={50}
                  alt="question mark"
                  className=" translate-y-10 blur-[0.5px] -ml-[60px]"
                />
              </div>
              <div className="flex w-fit">
                <Image
                  src={darkStar}
                  width={26}
                  height={16}
                  alt="dark star"
                  className="-mr-48 ml-48 "
                />
                <div className="w-fit">
                  <Image
                    src={manOnCloud}
                    width={100}
                    height={100}
                    alt="man on cloud"
                    className=" w-full lg:w-[80%] ml-auto"
                  />
                </div>
              </div>

              <div className="max-w-[510px] flex w-full  nl-auto">
                <Image
                  src={whiteStar}
                  width={25}
                  height={25}
                  alt="bulb"
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-b border-white border-opacity-10  py-20 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex max-w-[1368px]  items-center justify-center m-auto lg:px-4">
            <div className="flex flex-col justify-center items-center gap-20">
              <div className="text-center w-fit m-auto">
                <h4 className="text-3xl font-extrabold">Timeline</h4>
                <p>
                  Here is the breakdown of the time we anticipate <br />
                  using for the upcoming event.
                </p>
              </div>

              <div className="flex gap-6 lg:gap-14">
                <div className="flex-col gap-28 pt-[132px] h-fit hidden lg:flex">
                  <div>
                    <span className="ml-auto text-[#D434FE] text-xl font-extrabold flex justify-end">
                      Hackathon Announcement
                    </span>
                    <p className="text-right">
                      The getlinked tech hackathon 1.0 is formally announced
                      <br />
                      to the general public and teams begin to get ready to
                      register
                    </p>
                  </div>

                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold ml-auto flex justify-end">
                      November 18, 2023
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-end">
                      Teams Registration ends
                    </span>
                    <p className="text-right">
                      Interested Participants are no longer Allowed to
                      <br />
                      register
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-end">
                      November 18, 2023
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-end">
                      Getlinked Hackathon 1.0 Offically Begins
                    </span>
                    <p className="text-right">
                      Accepted teams can now proceed to build their
                      <br />
                      ground breaking skill driven solutions
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-end">
                      November 18, 2023
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center lg:justify-center ">
                  <div className="w-1 h-[140px] pt-[6px] bg-[#D434FE]"></div>
                  <div className="w-[30px] h-[30px] rounded-[50%] small_circle  text-center">
                    1
                  </div>
                  <div className="w-1 h-[140px] pt-[6px]  bg-[#D434FE]"></div>
                  <div className="w-[30px] h-[30px] rounded-[50%] small_circle text-center">
                    2
                  </div>
                  <div className="w-1 h-[140px] pt-[6px]  bg-[#D434FE]"></div>
                  <div className="w-[30px] h-[30px] rounded-[50%]  small_circle text-center">
                    3
                  </div>
                  <div className="w-1 h-[140px] pt-[6px]  bg-[#D434FE]"></div>
                  <div className="w-[30px] h-[30px] rounded-[50%] small_circle  text-center">
                    4
                  </div>
                  <div className="w-1 h-[140px] pt-[6px] bg-[#D434FE] "></div>
                  <div className="w-[30px] h-[30px] rounded-[50%] small_circle  text-center">
                    5
                  </div>
                  <div className="w-1 h-[140px] pt-[6px] bg-[#D434FE]  "></div>
                  <div className="w-[30px] h-[30px] rounded-[50%] small_circle text-center">
                    6
                  </div>
                </div>

                <div className="flex flex-col gap-[24px] lg:gap-[100px] lg:translate-y-[150px] h-fit">
                  <div className="flex lg:hidden flex-col h-[124px]">
                    <span className=" text-[#D434FE] text-xl font-extrabold flex ">
                      Hackathon Announcement
                    </span>
                    <p className="text-sm">
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold ml-auto flex justify-start">
                      November 18, 2023
                    </span>
                  </div>

                  <div className="lg:h-auto h-[110px]">
                    <span className="ml-auto text-[#D434FE] text-xl font-extrabold flex justify-start">
                      Teams Registration begins
                    </span>
                    <p className="text-left lg:text-base  text-sm max-w-[360px]">
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by proceeding to
                      register
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold ml-auto flex justify-start">
                      November 18, 2023
                    </span>
                  </div>
                  <div className="flex lg:hidden flex-col lg:h-auto h-[109px]">
                    <span className="text-[#D434FE] text-xl font-extrabold flex ">
                      Teams Registration ends
                    </span>
                    <p className="text-sm">
                      Interested Participants are no longer Allowed to register
                    </p>
                  </div>
                  <div className="flex lg:hidden flex-col">
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-start">
                      November 18, 2023
                    </span>
                  </div>
                  <div className="lg:h-auto h-[110px]">
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-start">
                      Announcement of the accepted teams and ideas
                    </span>
                    <p className="text-left lg:text-base  text-sm max-w-[360px]">
                      All teams whom idea has been accepted into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-start">
                      November 18, 2023
                    </span>
                  </div>
                  <div className="flex lg:hidden flex-col lg:h-auto h-[110px]">
                    <span className="text-[#D434FE] text-xl font-extrabold flex ">
                      Getlinked Hackathon 1.0 Offically Begins
                    </span>
                    <p className="text-sm">
                      Accepted teams can now proceed to build their ground
                      breaking skill driven solutions
                    </p>
                  </div>
                  <div className="flex  lg:hidden ">
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-end lg:hidden flex-col">
                      November 18, 2023
                    </span>
                  </div>
                  <div>
                    <span className="text-[#D434FE] text-xl font-extrabold flex justify-start">
                      Demo Day
                    </span>
                    <p className="text-left lg:text-base  text-sm max-w-[360px]">
                      Teams get the opportunity to pitch their projects to
                      judges. The winner of the hackathon will also be announced
                      on this day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-b border-white border-opacity-10  py-16 pb-24 px-[5px] lg:px-[74px]">
          <div className="flex max-w-[1368px]  items-center justify-end m-auto px-2 lg:px-4">
            <div className="flex flex-col w-full">
              <div className="flex max-w-[700px] w-full m-auto">
                <div className="flex flex-col gap-2 text-center lg:text-left m-auto lg:m-0 lg:ml-auto ">
                  <h4 className="text-3xl font-extrabold">
                    <span>Prizes and</span>
                    <br />
                    <span className="text-[#D434FE]">Rewards</span>
                  </h4>
                  <p>
                    Highest of the prizes or rewards for winners
                    <br /> for participants.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-32 lg:gap-0 lg:flex-row justify-end items-center">
                <div className="flex flex-col w-[80%] lg:w-[55%] gap-10 m-auto lg:m-0 lg:mr-auto">
                  <Image
                    className="items-center mr-auto absolute"
                    src={purpleStar}
                    width={20}
                    height={20}
                    alt="purple circle"
                  />
                  <Image
                    src={goldcup}
                    width={100}
                    height={100}
                    alt="golg trophy"
                    className="w-[100%] mr-auto"
                  />
                  <Image
                    className="items-center ml-auto absolute"
                    src={whiteStar}
                    width={20}
                    height={20}
                    alt="purple circle"
                  />
                </div>

                <div className="flex gap-5 lg:w-[47%] m-auto lg:m-0">
                  <div className="flex flex-col px-2 items-center justify-center text-center bg-[#D434FE1F] border border-[#D434FE] h-[150px] lg:pt-24 pt-10 lg:w-[120px] w-[30%] my-auto py-10  rounded-[4px]">
                    <Image
                      src={silvermedal}
                      width={50}
                      height={100}
                      alt="silver medal"
                      className="lg:w-[130px] w-[24%] absolute z-[5] lg:-mt-56 -mt-40"
                    />
                    <span className="text-lg font-extrabold">2nd</span>
                    <p className="text-sm pb-[6px] -mt-1">Runner</p>
                    <span className="font-bold text-[#D434FE]">N300,000</span>
                  </div>
                  <div className="flex flex-col w-[40%] lg:w-[unset]">
                    <div className="flex flex-col items-center justify-center text-center bg-[#903AFF1F] border border-[#903AFF] h-[160px] lg:pt-24 pt-10 lg:w-[120px]  px-2 my-auto py-10  rounded-[4px] mt-8">
                      <Image
                        src={goldmedal}
                        width={70}
                        height={70}
                        alt="golg medal"
                        className="lg:w-[180px] w-[30%] absolute z-[5] lg:-mt-[280px] -mt-[220px]"
                      />

                      <span className="text-lg font-extrabold">1st</span>
                      <p className="text-sm pb-[6px] -mt-1">Runner</p>
                      <span className="font-bold text-[#903AFF]">N400,000</span>
                    </div>
                    <Image
                      src={darkStar}
                      width={26}
                      height={16}
                      alt="dark star"
                      className="ml-auto mt-50 absolute"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center bg-[#D434FE1F] border border-[#D434FE] h-[150px] lg:pt-24 pt-10 lg:w-[120px] w-[30%] px-2 my-auto py-10  rounded-[4px]">
                    <Image
                      src={bronze}
                      width={50}
                      height={100}
                      alt="bronze method"
                      className="lg:w-[130px] w-[23%] absolute z-[5] lg:-mt-56 -mt-40"
                    />
                    <span className="text-lg font-extrabold">3rd</span>
                    <p className="text-sm pb-[6px] -mt-1">Runner</p>
                    <span className="font-bold text-[#D434FE]">N150,000</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className="w-full border-b border-white border-opacity-10  py-16 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex flex-col gap-20 px-4">
            <div>
              <div className="w-fit flex flex-col m-auto text-center">
                <h5 className="font-extrabold text-3xl">
                  Partners and Sponsors
                </h5>
                <p>
                  Getlinked Hackathon 1.0 is honored to have the following major
                  <br />
                  companies as its partners and sponsors
                </p>
              </div>
              <Image
                className="items-center mr-auto"
                src={purpleStar}
                width={20}
                height={20}
                alt="purple circle"
              />
            </div>
            <div className="flex flex-col border border-[#D434FE] border-opacity-[0.5] rounded-[4px] py-10 justify-center items-center gap-6">
              <div className=" grid grid-cols-3 w-full max-w-[700px] pr-11">
                <Image
                  className="items-center ml-auto col-start-2"
                  src={purpleStar}
                  width={20}
                  height={20}
                  alt="purple circle"
                />
              </div>
              <div className="flex w-full  max-w-[700px] ">
                <div className=" border-[#D434FE] border-r-2 w-full flex flex-col items-center justify-center">
                  <Image
                    src={libertyAssured}
                    width={100}
                    height={100}
                    alt="libertyAssured logo"
                    className="m-auto w-[70%]"
                  />
                </div>
                <div className=" border-[#D434FE] border-r-2 w-full flex flex-col items-center justify-center">
                  <Image
                    src={Libertypay}
                    width={120}
                    height={100}
                    alt="libertyAssured logo"
                    className="m-auto  w-[70%]"
                  />
                </div>
                <div className="  w-full flex flex-col items-center justify-center">
                  <Image
                    src={winwise}
                    width={100}
                    height={100}
                    alt="libertyAssured logo"
                    className="m-auto  w-[70%]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 items-center w-full max-w-[700px] gap-5 px-3">
                <div className="w-[90%] bg-[#D434FE] h-[1.5px] mx-auto"></div>
                <div className="w-[90%] bg-[#D434FE] h-[1.5px] mx-auto"></div>
                <div className="w-[90%] bg-[#D434FE] h-[1.5px] mx-auto"></div>
              </div>
              <div className="flex  w-full max-w-[700px]  ">
                <div className=" border-[#D434FE] border-r-2 w-full flex flex-col items-center justify-center">
                  <Image
                    src={wisper}
                    width={100}
                    height={100}
                    alt="libertyAssured logo"
                    className="m-auto  w-[70%]"
                  />
                </div>
                <div className=" border-[#D434FE] border-r-2  w-full flex flex-col items-center justify-center">
                  <Image
                    src={paybox}
                    alt="paybox logo"
                    width={100}
                    height={100}
                    className="m-auto  w-[70%]"
                  />
                </div>
                <div className="  w-full flex flex-col items-center justify-center">
                  <Image
                    src={visualz}
                    alt="visualz logo"
                    width={120}
                    height={120}
                    className="m-auto  w-[70%]"
                  />
                </div>
              </div>
              <div className=" grid grid-cols-3 w-full max-w-[700px] pr-11">
                <Image
                  className="items-center ml-auto col-start-2"
                  src={whiteStar}
                  width={20}
                  height={20}
                  alt="purple circle"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-b border-white border-opacity-10  py-20 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex flex-col gap-5 lg:gap-0 text-center lg:flex-row lg:text-left max-w-[1368px]  items-center justify-end m-auto px-4">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 justify-center lg:justify-start">
                  <h6 className="text-3xl font-extrabold">
                    Privacy Policy and
                    <br />
                    <span className="text-[#D434FE]">Terms</span>
                  </h6>
                  <Image
                    src={darkStar}
                    width={20}
                    height={16}
                    alt="dark star"
                    className=" -mt-14"
                  />
                </div>
                <span className="text-[#FFFFFFBF] text-sm">
                  Last updated on September 12, 2023
                </span>
                <div className="flex justify-between gap-3">
                  <p className="">
                    Below are our privacy & policy, which outline a lot of
                    goodies. it’s our aim to always take of our participant
                  </p>
                  <Image
                    className=" mb-auto "
                    src={purpleStar}
                    width={20}
                    height={20}
                    alt="purple circle"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Image
                  className="items-center absolute mt-[20%] -ml-8 col-start-2"
                  src={purpleStar}
                  width={20}
                  height={20}
                  alt="purple circle"
                />
                <div className="p-12 max-w-[580px] w-full border border-[#D434FE] flex flex-col gap-6 rounded-[5px]">
                  <p>
                    At getlinked tech Hackathon 1.0, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                  </p>
                  <div className="flex-col flex gap-4">
                    <span className="text-[#D434FE] font-bold text-xl">
                      Licensing Policy
                    </span>
                    <p>Here are terms of our Standard License:</p>
                    <ol className=" list-none">
                      <li className="flex gap-2">
                        <div className="pt-1">
                          <Image
                            className="mb-auto"
                            src={listicon}
                            width={20}
                            height={20}
                            alt="purple circle"
                          />
                        </div>
                        <p>
                          The Standard License grants you a non-exclusive right
                          to navigate and register for our event
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <div className="pt-1">
                          <Image
                            className="mb-auto"
                            src={listicon}
                            width={20}
                            height={20}
                            alt="purple circle"
                          />
                        </div>
                        <p>
                          You are licensed to use the item available at any free
                          source sites, for your project developement
                        </p>
                      </li>
                    </ol>
                  </div>
                  <Button className="register m-auto">Read More</Button>
                </div>
              </div>
            </div>
            <div>
              <Image
                className="w-[80%] ml-auto relative z-[10]"
                src={padlockman}
                width={20}
                height={20}
                alt="man on padlock"
              />
              <Image
                className="lg:w-[30%] m-auto w-[80%] -mt-[350px] lg:absolute lg:m-0  lg:-mt-[600px] lg:ml-[90px]"
                src={securityIcon}
                width={20}
                height={20}
                alt="security image"
              />
            </div>
          </div>
        </section>

        <footer className="w-full border-b border-white border-opacity-10  py-16 pb-24 px-[25px] lg:px-[74px]">
          <div className="flex flex-col justify-start gap-4 lg:gap-0  lg:flex-row max-w-[1368px]  items-center lg:justify-between m-auto px-4">
            <div className="flex gap-4">
              <Image
                className=""
                src={whiteStar}
                width={20}
                height={20}
                alt="security image"
              />
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-3">
                  <div className="flex text-3xl font-extrabold">
                    <span>get</span>
                    <span className="text-[#D434FE]">linked</span>
                  </div>
                  <p className="max-w-[500px]">
                    Getlinked Tech Hackathon is a technology innovation program
                    established by a group of organizations with the aim of
                    showcasing young and talented individuals in the field of
                    technology
                  </p>
                </div>
                <p>
                  <a href="#">Terms of Use</a>
                  <span className="text-[#D434FE] px-1">|</span>
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-[5px] lg:pl-0 mr-0 pl-[38px] mr-auto">
              <li className="text-xl text-[#D434FE] font-bold">Useful Links</li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li className="flex gap-4">
                <span className="text-[#D434FE] font-bold">Follow us</span>
                <Image
                  className=""
                  src={instagram}
                  width={25}
                  height={20}
                  alt=""
                />
                <Image
                  className=""
                  src={twitter}
                  width={20}
                  height={20}
                  alt=""
                />
                <Image
                  className=""
                  src={facebook}
                  width={12}
                  height={10}
                  alt=""
                />
                <Image
                  className=""
                  src={linkedIn}
                  width={27}
                  height={20}
                  alt=""
                />
              </li>
            </ul>
            <div className="pt-3 flex flex-col items-start">
              <Image
                className=""
                src={darkStar}
                width={15}
                height={20}
                alt=""
              />
            </div>
            <div className="flex lg:pl-0 lg:mr-0 pl-[38px] mr-auto">
              <ul className="flex flex-col gap-[25px] ">
                <li className="text-[#D434FE] text-xl font-bold">Contact Us</li>
                <li className="flex gap-2">
                  <Image
                    className=" self-end"
                    src={telephone}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>+234 7042298556</p>
                </li>
                <li className="flex gap-2">
                  <Image
                    className=" self-start"
                    src={location}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>
                    27,Alara Street
                    <br />
                    Yaba 100012
                    <br />
                    Lagos State
                  </p>
                </li>
              </ul>
              <Image
                className=" self-end mt-auto"
                src={whiteStar}
                width={10}
                height={20}
                alt=""
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
