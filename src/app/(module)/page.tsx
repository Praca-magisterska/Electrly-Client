import ModuleBarButton from "@/components/elements/buttons/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

import Page from "@/components/layouts/Page";
import PageContent from "@/components/layouts/PageContent";
import PageContentSection from "@/components/layouts/PageContentSection";

import Image from 'next/image'
import Link from 'next/link'
import TrendingThreadCard from "@/components/elements/cards/TrendingThreadCard";

export default function Signin() {
    let trendingThreads = [
      {
        id: 0,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: {nickname: "Sam Smith"}
      },
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      }
    ];

    return (
        <Page>
          <PageContent
            header = {
                <div>
                  {/* header */}
                </div>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>
            <PageContentSection title="Trending Today">
              {trendingThreads.map((thread, index) => (
                <TrendingThreadCard key={index} thread={thread} />
              ))}
            </PageContentSection>
            <PageContentSection title="Nav" showTitle={false}>

            </PageContentSection>
            <PageContentSection title="Threads & Discussion">
              
            </PageContentSection>
          </PageContent>
        </Page>
    )
}