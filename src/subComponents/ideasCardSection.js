import React from "react";
import Card from "./card";
import "../components/css files/ideasCardSection.css"

function IdeasCardSection(){

const cards = {
    card1: {
        img: "https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/azure-devops.svg",
        text:"share code, track work, and ship software with modern dev services",
        spanText:"Azure DevOps"
    },
    card2: {
        img:"https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/azure-arc.svg",
        text:"Unify on-premises, hybrid, and cross-cloud infrastructure",
        spanText:"Azure Arc"
    },
    card3: {
        img: "https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/purview.svg",
        text:"Maximize the business value of data with unified data governance",
        spanText: "Microsoft Purview"
    },
    card4: {
        img: "https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/azure.svg",
        text: "Strengthen security for multicloud and hybrid environments",
        spanText: "Microsoft Defender for Cloud"
    },
    card5: {
        img: "https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/kubernetes-service.svg",
        text: "Make and scale apps with managed Kubernetes",
        spanText: "Azure Kubernetes Service (AKS)"
    },
    card6: {
        img: "https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/svg/backup.svg",
        text: "Simplify data protection with built-in backup management at scale",
        spanText: "Azure Backup"
    }
}

    return(
        <div className="ideasCardSection">
            <Card 
            img= {cards.card1.img}
            text= {cards.card1.text}
            spanText={cards.card1.spanText} />

            <Card 
            img= {cards.card2.img}
            text= {cards.card2.text}
            spanText= {cards.card2.spanText} />

            <Card 
            img= {cards.card3.img}
            text= {cards.card3.text}
            spanText= {cards.card3.spanText} />

            <Card 
            img= {cards.card4.img}
            text= {cards.card4.text}
            spanText= {cards.card4.spanText} />

            <Card 
            img= {cards.card5.img}
            text= {cards.card5.text}
            spanText= {cards.card5.spanText} />

            <Card 
            img= {cards.card6.img}
            text= {cards.card6.text}
            spanText= {cards.card6.spanText} />
        </div>
    )
}

export default IdeasCardSection;