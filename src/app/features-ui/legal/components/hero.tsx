import SectionTitleTag from "@/components/section-tag";
import { Box, Container } from "@chakra-ui/react";
import { SectionTitle } from "../../solutions/components/HeadingText";

export default function Hero({label, title}:{label: string, title: string}){
    return (
        <Box as="section">
            <Container pt={200} pb={20}>
                <SectionTitleTag color={"primary"}>{label}</SectionTitleTag>
                <SectionTitle mt={2}>{title}</SectionTitle>
            </Container>
        </Box>
    )
}