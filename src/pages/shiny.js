import React from 'react'
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Web3 from 'web3'

import happy from "../images/happy.png"
import sad from "../images/sad.png"
import excited from "../images/excited.png"
import sample from "../images/sample.gif"
import background from "../images/cloudbackground.png"
import NKHBlack from "../images/NKHBlackLogo.png"
import FdnBlack from "../images/4UFdnBlackLogo.png"

// Import ABI + Config
import Shiny from '../abis/Shiny.json';
import CONFIG from '../config.json';

import {
    MintPageContainer,
    MintPageNavbar,
    NavbarLink,
    WalletLink,
	FoundationLink,
    MetamaskButton,
    MintPageMain,
    DescriptionPanel,
    AmountMinted,
    MintPanel,
	SponsorCardWrapper,
	SponsorCard,
	SponsorTitle,
	SponsorWrapper,
	SponsorLink,
	Sponsor,
    GridCol,
    ImgShowcase,
    ImgShowcaseImg,
    MintButton,
    TextWrapper,
    Heading,
	Title,
    Text,
    MintLabel,
    MintInput,
    FooterSection,
    FooterLinksWrapper,
    CurrentNetwork,
    FooterLinks,
    ContractInfo,
    ContractLink,
    ContractConnectedWrapper,
    NetworkLabel,
    RemainingNFTs,
	DeductionInstructionsH1,
	DeductionInstructionsP,
	DeductionInstructionsWrapper,
	WebsiteRights,
	RightsWrapper,
	ImgCycleImg,
	ImgCycleShowcase,
	PreviewPanel,
	List,
	Item,
	SocialMediaWrap,
	SocialIcons,
	SocialIconLink,
	Bar,
	Fill,
	ProgressLabel,
	Connect
} from '../components/ShinyMint/MintingPageElements'

function ShinyPage() {
	const { MerkleTree } = require('merkletreejs');
	const keccak256 = require('keccak256');
    const [Price, setPrice] = useState(0)
	const [amtToMint, setAmtToMint] = useState(1)
	const [web3, setWeb3] = useState(null)
	const [shiny, setShiny] = useState(null) 
	const [contract, setContract] = useState(null)
 
	const [supplyAvailable, setSupplyAvailable] = useState(0)
	const [balanceOf, setBalanceOf] = useState(0)
	const [addressMintedBalance, setAddressMintedBalance] = useState(0)
	const [paused, setPaused] = useState(true)
	const [isWaitlisted, setIsWaitlisted] = useState(false)
	const [onlyWaitlisted, setOnlyWaitlisted] = useState(true)
	const [minted, setMinted] = useState(false)
	const [proof, setProof] = useState(null)
    
    const [maxSupply, setMaxSupply] = useState(null)
    const [totalSupply, setTotalSupply] = useState(null)

	const [account, setAccount] = useState(null)
	const [currentNetwork, setCurrentNetwork] = useState(null)

	const [blockchainExplorerURL, setBlockchainExplorerURL] = useState('https://etherscan.io/')
	const [openseaURL, setOpenseaURL] = useState('https://opensea.io/')

	const [isMinting, setIsMinting] = useState(false)
	const [isError, setIsError] = useState(false)
	const [message, setMessage] = useState(null)
	const [percentageFill, setPercentageFill] = useState(null)
	const [kidsFed, setKidsFed] = useState(null)
	const [kidsFedPerPerson, setKidsFedPerPerson] = useState(null)
	const [maxSupplyLabel, setMaxSupplyLabel] = useState(null)
	const [totalSupplyLabel, setTotalSupplyLabel] = useState(null)
	const [supplyAvailableLabel, setSupplyAvailableLabel] = useState(null)
	const [priceOfEth, setPriceOfEth] = useState(2850)
	
	
	


	const loadBlockchainData = async (
    ) => {
		// Fetch Contract, Data, etc.
		if (web3) {
			const networkId = await web3.eth.net.getId()
			setCurrentNetwork(networkId)

			try {
				const shiny = new web3.eth.Contract(Shiny.abi, Shiny.networks[networkId].address)
				setShiny(shiny)
				const contract = shiny._address
				setContract(contract)


				if (networkId !== 5777) {
					setBlockchainExplorerURL(CONFIG.NETWORKS[networkId].blockchainExplorerURL)
					setOpenseaURL(CONFIG.NETWORKS[networkId].openseaURL)
				}
				
				try {
					let waitlistAddresses = [
						"0x70062280B54486b9717ef00eeB56E0bd7A75c0eE",
						"0x1b6a42CE5c79d1c5C6E09C190d0776b98a4EeC7A",
						"0x0Fb9Fa830c25391C770eB6811A3bABC63Fc0e42c",
						"0xA7eE3e57acbC1c06e5ecC436d7B7AF7eb8F9325e",
						"0xb14fE096DfDD0Ea8C7F47998bB131067D87c2866",
						"0x2a8422725110AF0c3BaD422511aab1aFB8dAb42b",
						"0xfD74E361244a2E4eb807583969943EEc01b60FFC",
					]
					const leafNodes = waitlistAddresses.map(addr => keccak256(addr));
					const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
					const root = tree.getHexRoot()
		
					const _msgSender = account
					const index = waitlistAddresses.findIndex(addr => addr === _msgSender);
					const leaf = tree.getLeaf(index);
					const proofarray = tree.getHexProof(leaf);
					const verified = tree.verify(proofarray, leaf, root, keccak256);
					setIsWaitlisted(verified)
					setProof(proofarray)
				} catch (error) {
				setIsWaitlisted(false)
				setMessage("You are not waitlisted")
				}
				
				const Price = await shiny.methods.cost().call()
				setPrice(Price)

				const maxSupply = await shiny.methods.maxSupply().call()
				const totalSupply = await shiny.methods.supply().call()
				
                setMaxSupply(maxSupply)
                setTotalSupply(totalSupply)
				setSupplyAvailable(maxSupply - totalSupply)
				setMaxSupplyLabel((maxSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
				setTotalSupplyLabel((totalSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
				setSupplyAvailableLabel((maxSupply - totalSupply).toLocaleString(undefined, {maximumFractionDigits:2}))
				
				const paused = await shiny.methods.paused().call()
				setPaused(paused)

				const ownerOfRare = await shiny.methods.ownerOf(20).call()
				if (ownerOfRare = msg.sender) {
					render rare rewards
					
				}

				const balanceOf = await shiny.methods.balanceOf(account).call()
				setBalanceOf(balanceOf)

				const addressMintedBalance = await shiny.methods.addressMintedBalance(account).call()
				setAddressMintedBalance(addressMintedBalance)
				if (addressMintedBalance > 0) {
					setMinted(true)
				}
				
				const onlyWaitlisted = await shiny.methods.onlyWaitlisted().call()
				setOnlyWaitlisted(onlyWaitlisted)

				const percentageFill = (totalSupply/maxSupply)*100
				setPercentageFill(percentageFill)

				const kidsFed = (totalSupply*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
				setKidsFed(kidsFed)

				const kidsFedPerPerson = (addressMintedBalance*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
				setKidsFedPerPerson(kidsFedPerPerson)
				

			} catch (error) {
				setIsError(true)
				if (!shiny) {
					setMessage("Contract not deployed to current network, please change network in MetaMask and refresh the page")
				}
				if (!account && contract) {
					setMessage("Please connect with MetaMask")
				}

			}
		}
	}

	const loadWeb3 = async () => {
		if (typeof window.ethereum !== 'undefined' && !account) {
			const web3 = new Web3(window.ethereum)
			setWeb3(web3)

			const accounts = await web3.eth.getAccounts()

			if (accounts.length > 0) {
				setAccount(accounts[0])
			} else {
				setMessage('Please connect with MetaMask')
			}

			window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
				setMessage(null)
			});

			window.ethereum.on('chainChanged', (chainId) => {
				// Handle the new chain.
				// Correctly handling chain changes can be complicated.
				// We recommend reloading the page unless you have good reason not to.
				window.location.reload();
			});
		}
	}
    
    

	// MetaMask Login/Connect
	const web3Handler = async () => {
		if (web3) {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			setAccount(accounts[0])
		}
	}
	const handleInput = event => {
		setAmtToMint(event.target.value)
	}
	const mintNFTHandler = async () => {
		if (!account) {
			window.alert('You need to connect your wallet first!')
			return
		}

		if (amtToMint > (10000 - balanceOf)) {
			window.alert('You can\'t mint this many. Try minting less.')
			return
		}

		if (amtToMint > supplyAvailable) {
			window.alert('There aren\'t enough NFT\'s left to mint that many.')
			return
		}

		if (balanceOf > 10000) {
			window.alert('You\'ve already minted as many as you can!')
			return
		}

		// Mint NFT
		if (shiny) {
			setIsMinting(true)
			setIsError(false)

			await shiny.methods.publicMint(amtToMint).send({ from: account, value: (amtToMint*Price)})
				.on('confirmation', async () => {
					const maxSupply = await shiny.methods.maxSupply().call()
					const totalSupply = await shiny.methods.supply().call()
					setSupplyAvailable(maxSupply - totalSupply)
					setMaxSupplyLabel((maxSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
					setTotalSupplyLabel((totalSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
					setSupplyAvailableLabel((maxSupply - totalSupply).toLocaleString(undefined, {maximumFractionDigits:2}))

					const balanceOf = await shiny.methods.balanceOf(account).call()
					setBalanceOf(balanceOf)
					const addressMintedBalance = await shiny.methods.addressMintedBalance(account).call()
					setAddressMintedBalance(addressMintedBalance)
					const percentageFill = (totalSupply/maxSupply)*100
					setPercentageFill(percentageFill)
	
					const kidsFed = (totalSupply*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
					setKidsFed(kidsFed)
	
					const kidsFedPerPerson = (addressMintedBalance*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
					setKidsFedPerPerson(kidsFedPerPerson)

				})
				.on('error', (error) => {
					window.alert('There was an error. You may have rejected the transaction. Please try again.')
					setIsError(true)
				})
		}

		setIsMinting(false)
	};

	const waitlistMintNFTHandler = async () => {
		if (!account) {
			window.alert('You need to connect your wallet first!')
			return
		}

		if (amtToMint > (5000 - balanceOf)) {
			window.alert('You can\'t mint this many. Try minting less.')
			return
		}

		if (amtToMint > supplyAvailable) {
			window.alert('There aren\'t enough NFT\'s left to mint that many.')
			return
		}

		if (balanceOf > 49) {
			window.alert('You\'ve already minted as many as you can!')
			return
		}

		// waitlistMint NFT
		if (shiny) {
			setIsMinting(true)
			setIsError(false)

			await shiny.methods.waitlistMint(amtToMint, proof).send({ from: account, value: (amtToMint*Price) })
				.on('confirmation', async () => {
					const maxSupply = await shiny.methods.maxSupply().call()
					const totalSupply = await shiny.methods.supply().call()
					setSupplyAvailable(maxSupply - totalSupply)
					setMaxSupplyLabel((maxSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
					setTotalSupplyLabel((totalSupply * 1).toLocaleString(undefined, {maximumFractionDigits:2}))
					setSupplyAvailableLabel((maxSupply - totalSupply).toLocaleString(undefined, {maximumFractionDigits:2}))

					const balanceOf = await shiny.methods.balanceOf(account).call()
					setBalanceOf(balanceOf)
					const addressMintedBalance = await shiny.methods.addressMintedBalance(account).call()
					setAddressMintedBalance(addressMintedBalance)
					const percentageFill = (totalSupply/maxSupply)*100
					setPercentageFill(percentageFill)
	
					const kidsFed = (totalSupply*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
					setKidsFed(kidsFed)
	
					const kidsFedPerPerson = (addressMintedBalance*priceOfEth*0.03*10).toLocaleString(undefined, {maximumFractionDigits:2})
					setKidsFedPerPerson(kidsFedPerPerson)
				})
				.on('error', (error) => {
					window.alert('There was an error. You may have rejected the transaction. Please try again.')
					setIsError(true)
				})
		}

		setIsMinting(false)
	};

	
	const renderHandlePublic = () => {
		return <GridCol sm={12} md={6}><MintLabel for="amtToMint">How many? (10 max)</MintLabel><MintInput onChange={handleInput} type="number" name="amtToMint" id="amtToMint" max="100" min="1" placeholder="1"/><MintButton onClick={mintNFTHandler}>Mint</MintButton></GridCol>
	}

	const renderHandleOnlyWaitlist = () => {
		if (isWaitlisted) {
		  return <GridCol sm={12} md={6}><MintLabel for="amtToMint">How many? (10 max)</MintLabel><MintInput onChange={handleInput} type="number" name="amtToMint" id="amtToMint" max="100" min="1" placeholder="1"/><MintButton onClick={waitlistMintNFTHandler}>Mint</MintButton></GridCol>
		} else {
			return 
		}
	}

	const renderHandleWaitlist = () => {
		if (onlyWaitlisted) {
		  return renderHandleOnlyWaitlist();
		} else {
			return renderHandlePublic();
		}
	}

	const renderHandlePaused = () => {
		if (paused) {
		  return <GridCol sm={12} md={6}><MintLabel>Minting is paused!</MintLabel></GridCol>
		} else {
		  return renderHandleWaitlist();
		}
	}

	const renderHandleAddress = () => {
		if (!account) {
		  return <GridCol sm={12} md={6}><MetamaskButton onClick={web3Handler}>Connect Wallet</MetamaskButton></GridCol>
		} else {
		  return renderHandlePaused();
		}
	}
	
	const renderHandleContract = () => {
	    if(!contract) {
		  return 
	    } else {
	      return renderHandleAddress();
		}
	}

	const renderAccountIsWaitlisted = () => {
		if(isWaitlisted) {
		  return <Connect>YOU ARE WAITLISTED!</Connect>
	  	} else {
		  return <Connect>You are not waitlisted, sorry :(</Connect>;
	    }
	}

	const renderIsWaitlisted = () => {
		if(!account) {
		  return <Connect>Connect to see if you are Waitlisted!</Connect>;
	  	} else {
		  return renderAccountIsWaitlisted()
	    }
	}

	const renderOnlyWaitlisted = () => {
		if(onlyWaitlisted) {
			return renderIsWaitlisted()
			} else {
			return <Connect>Public sale is LIVE!</Connect>;
		  }
	}

	const renderProgressBar = () => {
		
		if(!contract) {
		return null
		} else {
		return <div><Bar><Fill percentage = {percentageFill} />
		</Bar><ProgressLabel>{kidsFed} Meals Provided!</ProgressLabel></div>
		}
	}



    useEffect(() => {
        loadWeb3()
        loadBlockchainData()
    }, [account]);

	return (
        <div style={{background: `url(${background})`, backgroundSize: 'cover'}}>
		<MintPageContainer>
			<MintPageNavbar>
					<NavbarLink	to="/">
						Return To Co-Labs
					</NavbarLink>
					<FoundationLink href='https://www.4ufoundation.io'>
						Return to 4U Fdn.
					</FoundationLink>
					<NavbarLink	to="/projects">
						Return To Projects
					</NavbarLink>
					{account ? (
						<WalletLink
							href={`${blockchainExplorerURL}address/${account}`}>
							{account.slice(0, 5) + '...' + account.slice(38, 42)}
						</WalletLink>
					) : (
						<MetamaskButton onClick={web3Handler}>Connect Wallet</MetamaskButton>
					)}
				</MintPageNavbar>
			<MintPageMain>
				<DescriptionPanel>
					<TextWrapper>
						<Title>Shiny & Friends</Title>
					</TextWrapper>
				</DescriptionPanel>
                {!contract ? (
					<div>
					<AmountMinted>
						Presale: March 15th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
						Public: March 17th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
						Mint price: 0.04 ETH
					</AmountMinted>
					<AmountMinted>
						Max 10 per transaction/50 per wallet
					</AmountMinted>
					{renderOnlyWaitlisted()}
					</div>
                ) : !account ? (
					<div>
					<AmountMinted>
                    	Connect your Wallet!
                    </AmountMinted>	
					<AmountMinted>
						Presale: March 15th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
						Public: March 17th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
						Mint price: 0.04 ETH
					</AmountMinted>
					<AmountMinted>
						Max 10 per transaction/50 per wallet
					</AmountMinted>
					{renderOnlyWaitlisted()}
					</div>
				) : (
					<div>
					<AmountMinted>
						Presale: March 15th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
						Public: March 17th, 9:00AM EST
					</AmountMinted>
					<AmountMinted>
                        {totalSupplyLabel}/{maxSupplyLabel} minted!
                    </AmountMinted>	
					{renderOnlyWaitlisted()}			
					{renderProgressBar()}				
					</div>
				)}
				
				
				<MintPanel>
					{renderHandleContract()}
					<ImgShowcase>
						<ImgShowcaseImg
							src={!account ?(
								happy
							) : !contract && isWaitlisted ? (
								excited
							) : onlyWaitlisted && isWaitlisted ? (
								excited
							) : !onlyWaitlisted && !isWaitlisted ?(
								happy
							) : !contract && !isWaitlisted ?(
								sad
							) :	!isWaitlisted ?(
								sad
							) : !isError && isMinting ? (
								excited
							) : isError ?(
								sad
							) : !account ?(
								happy
							) : (
								happy
							)}
							alt="image-showcase"
						/>
					</ImgShowcase>
				</MintPanel>
				{addressMintedBalance !== 0 ? (
					<AmountMinted>
						{`You provided ${kidsFedPerPerson} meals!`}
					</AmountMinted>
				) : (
					null
				)}
				{!contract ? (
					<FooterSection>
						{account &&
						<FooterLinksWrapper>
							<FooterLinks href={openseaURL + account} target="_blank">
								My Opensea</FooterLinks>
							<FooterLinks href={`${blockchainExplorerURL}address/${account}`} target="_blank">
								My Etherscan</FooterLinks>
						</FooterLinksWrapper>
						} 
					</FooterSection>	
				) : contract && account ? (
					<FooterSection>	
						<FooterLinksWrapper>
								<FooterLinks href={openseaURL + account} target="_blank">
								My Opensea</FooterLinks>
								<FooterLinks href={`${blockchainExplorerURL}address/${account}`} target="_blank">
								My Etherscan</FooterLinks>							
								<ContractLink href={`${blockchainExplorerURL}address/${shiny._address}`} target="_blank">
								Contract Address</ContractLink>
						</FooterLinksWrapper>
					</FooterSection>			
				) : contract ? (
					<FooterSection>	
						<FooterLinksWrapper>
								<ContractLink href="https://etherscan.io/address/0x3F803f2ddd69e27249104c0D371A469A3b5Bd617" target="_blank">
								Contract Address</ContractLink>
						</FooterLinksWrapper>
					</FooterSection>	
				) : (
					<FooterSection>	
						<FooterLinksWrapper>
								<FooterLinks href={openseaURL + account} target="_blank">
								My Opensea</FooterLinks>
								<FooterLinks href={`${blockchainExplorerURL}address/${account}`} target="_blank">
								My Etherscan</FooterLinks>							
						</FooterLinksWrapper>
					</FooterSection>
				)}
				<ContractInfo>
					{contract && message ? (
						<CurrentNetwork>{message}</CurrentNetwork>
					) : contract && !message ?(
						<ContractConnectedWrapper>
							{CONFIG.NETWORKS[currentNetwork] && (
								<NetworkLabel>
                                    Current Network: {CONFIG.NETWORKS[currentNetwork].name}
                                </NetworkLabel>
							)}

							<RemainingNFTs>
                                {`NFT's Left: ${supplyAvailableLabel}, You minted: ${addressMintedBalance}, You own: ${balanceOf}`}
                            </RemainingNFTs>
							
							
						</ContractConnectedWrapper>
					) : (
						<ContractLink href="https://etherscan.io/address/0x3F803f2ddd69e27249104c0D371A469A3b5Bd617" target="_blank">
								Contract Address</ContractLink>
					)}
				</ContractInfo>
				<DescriptionPanel>
					<TextWrapper>
						<Heading>Learn More!</Heading>
					</TextWrapper>
				</DescriptionPanel>
				<DescriptionPanel>	
					<TextWrapper>
						<Text>The first tax deductible NFT! 100% of the mint fee goes directly to charity! Charity wallets are recorded on chain, so no funny business is possible. 75% of the mint fee is a tax deductible donation to No Kid Hungry, a 501c3 Organization.
                        25% of the mint fee is a tax deductible donation to 4U Foundation, a 501c3 Organization.
						</Text>
					</TextWrapper>
				</DescriptionPanel>
				<PreviewPanel>
					<GridCol>
						<TextWrapper>
							<Heading>Fast Facts</Heading>
							<List>
								<Text>+ Features over 200 individual handrawn traits</Text>
								<Text>+ Will provide ~10 million meals through No Kid Hungry</Text>
								<Text>+ Supports artists and art programs through 4U Foundation</Text>
								<Text>+ Access to future projects and giveaways</Text>
							</List>
						</TextWrapper>
					</GridCol>
					<GridCol>
					<ImgCycleShowcase>
						<ImgCycleImg src= {sample} />
					</ImgCycleShowcase>
					</GridCol>
				</PreviewPanel>
					<SocialMediaWrap>
						<SocialIcons>
                            <SocialIconLink href="https://discord.gg/rPVKq5gtRR" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/CoLabsLLC" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/colabs_llc" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
				<SponsorCardWrapper>
					<SponsorCard>
						<SponsorTitle>
							Sponsored By:
						</SponsorTitle>
						<SponsorWrapper>
							<SponsorLink href="https://www.nokidhungry.org/" target="_blank">
								<Sponsor src={NKHBlack}/>
							</SponsorLink>
						</SponsorWrapper>
						<SponsorWrapper>
							<SponsorLink href="https://www.4Ufoundation.io" target="_blank">
								<Sponsor src={FdnBlack}/>
							</SponsorLink>	
						</SponsorWrapper>
					</SponsorCard>
				</SponsorCardWrapper>
				<DeductionInstructionsWrapper>
					{contract && minted ? (
						<DeductionInstructionsWrapper>
							<SponsorCard>
								<DeductionInstructionsH1>
									Thank you so much for your support!
								</DeductionInstructionsH1>
								<DeductionInstructionsP>
									75% of the USD value of your mint fee can be attributed to Share Our Strength, EIN: 52-1367538, Address: 1030 15th Street NW, Suite 1100W, Washington, DC 20005. 
								</DeductionInstructionsP>
								<DeductionInstructionsP>
									25% of the USD value of your mint fee can be attributed to 4U Foundation, Inc. EIN: 87-3013158, Address: 205 N 5th Street, 2L, Brooklyn, NY 11211. 
								</DeductionInstructionsP>
								<DeductionInstructionsH1>
									Here is some information you may need to accurately report your donation on your tax return.
								</DeductionInstructionsH1>
								<DeductionInstructionsP>
								Tax laws differ from jurisdiction to jurisdiction. Please consult an accountant with your personal tax circumstances to determine the deductibility of your mint. However, according to the IRS, if the value of your donated property (Ethereum) exceeds $5,000, the donor (you) must get a qualified appraisal. Furthermore, for any donations exceeding $500, the donor must file Form 8283 with their personal tax return. The amount of your donation that is deductible for federal income tax purposes depends on the period of time you have held the asset. If it is short term (less than 1 year) your deduction is limited to your basis. However, if it is long term (over 1 year) the deduction is the Fair Market Value at the time of the donation. Your donation is also reduced by the Fair Market Value of the property received (the NFT). In good faith, we estimate the Fair Market Value to be $1.00 each.	
								</DeductionInstructionsP>
							</SponsorCard>
						</DeductionInstructionsWrapper>
					) : (
						<DeductionInstructionsWrapper>
							<SponsorCard>
								<DeductionInstructionsH1>
									Here is some information you may need to accurately report your donation on your tax return.
								</DeductionInstructionsH1>
								<DeductionInstructionsP>
									Tax laws differ from jurisdiction to jurisdiction. Please consult an accountant with your personal tax circumstances to determine the deductibility of your mint. However, according to the IRS, if the value of your donated property (Ethereum) exceeds $5,000, the donor (you) must get a qualified appraisal. Furthermore, for any donations exceeding $500, the donor must file Form 8283 with their personal tax return. The amount of your donation that is deductible for federal income tax purposes depends on the period of time you have held the asset. If it is short term (less than 1 year) your deduction is limited to your basis. However, if it is long term (over 1 year) the deduction is the Fair Market Value at the time of the donation. Your donation is also reduced by the Fair Market Value of the property received (the NFT). In good faith, we estimate the Fair Market Value to be $1.00 each.  
								</DeductionInstructionsP>
							</SponsorCard>
						</DeductionInstructionsWrapper>
					)}
				</DeductionInstructionsWrapper>
				
			</MintPageMain>
			<RightsWrapper>
				<WebsiteRights>Co-Labs © {new Date().getFullYear()} All rights reserved</WebsiteRights>
			</RightsWrapper>
		</MintPageContainer>
        </div>
	)
}

export default ShinyPage;


