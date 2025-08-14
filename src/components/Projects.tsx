import React from "react";
import ticTacToe from "../media/tic-tac-toe.png";
import functionSelector from "../media/function-selector-creator.png";
import poolreader from "../media/poolreader.png";
import zeni from "../media/zeni.png";
import aiAgent from "../media/ai-agent.png";
import { SocialIcon } from "react-social-icons";
import { PROJECTS_LINK } from "../links.ts";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <div className="relative flex items-center justify-center">
        <div className="w-full h-px bg-gray-300 absolute" />
        <span className="px-4 text-sm tracking-widest text-gray-500 uppercase font-bold z-10 bg-white">
          Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            Uniswap v4 AI Agent
            <div className="px-2">
              <SocialIcon
                url={PROJECTS_LINK.AI_AGENT_LINK}
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
                bgColor="black"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Telegram AI agent for interacting with Uniswap v4 protocol
              contracts.
            </li>
            <li>
              Users can get the data from StateView and PositionManager
              contracts (pool keys, pool liquidity, pool state, position info).
            </li>
            <li>
              The agent is chain-agnostic and supports all 14 chains on which
              Uniswap is live.
            </li>
            <li>
              Future upgrades: managing pools and positions (creating pools,
              making swaps, adding/removing liquidity, etc.).
            </li>
            <li className="list-inside font-bold">
              Stack: ElizaOS, TypeScript, viem, Gemini.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aiAgent}
            alt="Telegram AI Agent"
            className="rounded-lg shadow-md w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            Tic-Tac-Toe on Blockchain
            <div className="px-2">
              <SocialIcon
                url={PROJECTS_LINK.TIC_TAC_TOE_LINK}
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
                bgColor="black"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Blockchain implementation of the Tic-Tac-Toe game. Backend is live
              on Base L2 Mainnet. Frontend is hosted on Vercel.
            </li>
            <li>
              Players can create a new game with a target address, share the
              invite URL, and make turns. Every move is recorded onchain.
            </li>
            <li>
              Integrates Coinbase Smart Wallet and passkey sign-in for improved
              user authentication.
            </li>
            <li className="list-inside font-bold">
              Stack: Solidity (Foundry), TypeScript, React, wagmi, viem
            </li>
          </ul>
        </div>
        <div>
          <img
            src={ticTacToe}
            alt="Tic-Tac-Toe on Blockchain"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <h3 className="text-xl font-semibold flex mb-2">
            Solidity Function Selector Creator
            <div className="px-2">
              <SocialIcon
                url={PROJECTS_LINK.FUNCTION_SELECTOR_LINK}
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
                bgColor="black"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Python script for creating Solidity functions that accept
              specified parameters and generate the corresponding selector.
            </li>
            <li>
              Includes checks against reserved keywords, valid characters, and
              supported parameter types.
            </li>
            <li className="list-inside font-bold">
              Stack: Python (web3, eth_abi, time, string, random)
            </li>
          </ul>
        </div>
        <div className="md:order-1">
          <img
            src={functionSelector}
            alt="Solidity Function Selector Creator"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold flex mb-2">
            Uniswap v4 Poolreader
            <div className="px-2">
              <SocialIcon
                url={PROJECTS_LINK.POOLREADER_LINK}
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
                bgColor="black"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              JavaScript module for fetching data from Uniswap v4 StateView and
              PositionManager contracts.
            </li>
            <li>Currently supports the Ethereum and Base mainnets.</li>
            <li className="list-inside font-bold">Stack: JavaScript</li>
          </ul>
        </div>
        <div>
          <img
            src={poolreader}
            alt="Uniswap v4 Poolreader"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <h3 className="text-xl font-semibold flex mb-2">
            Zeni Stablecoin
            <div className="px-2">
              <SocialIcon
                url={PROJECTS_LINK.ZENI_LINK}
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
                bgColor="black"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Decentralized stablecoin pegged to USD and backed by a basket of
              collateral tokens (WETH and WBTC).
            </li>
            <li>200% overcollateralized with algorithmic minting.</li>
            <li>Tests: unit, integration, and stateless fuzzing.</li>
            <li className="list-inside font-bold">
              Stack: Solidity (Foundry), Chainlink
            </li>
          </ul>
        </div>
        <div className="md:order-1">
          <img
            src={zeni}
            alt="Zeni Stablecoin"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
