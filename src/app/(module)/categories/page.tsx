import ModuleBarButton from "@/components/elements/buttons/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PageContent from "@/components/layouts/PageContent";
import Page from "@/components/layouts/Page";
import Image from 'next/image'
import Link from 'next/link'
import PageContentSection from "@/components/layouts/PageContentSection";
import ThreadCategoryCard from "@/components/elements/cards/ThreadCategoryCard";

export default function Signin() {
    let trendingThreads = [
      {
        id: 0,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Serwis Komputery",
      },
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "DIY Zrób to sam",
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ogłoszenia",
      },
      {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Poradniki",
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Programowanie",
      },
      {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Automatyka Przemysłowa",
      },
      {
        id: 6,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Audio i Akustyka",
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
            <PageContentSection title="Categories">
              {trendingThreads.map((thread) => (
                <ThreadCategoryCard key={thread.id} category={thread} />
              ))}
            </PageContentSection>
          </PageContent>
        </Page>
    )
}