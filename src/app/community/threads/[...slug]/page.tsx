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
import ThreadCategoryCard from "@/components/elements/cards/ThreadCategoryCard";
import ThreadCard from "@/components/elements/cards/ThreadCard";
import ThreadMainCard from "@/components/elements/cards/ThreadMainCard";
import ThreadCommentCard from "@/components/elements/cards/ThreadCommentCard";

export default function Thread() {
    return (
        <Page>
          <PageContent
            header = {
              <div>

              </div>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>    
            <PageContentSection title="Thread">
              <ThreadMainCard thread={{
                  id: 0,
                  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
                  threadReactionsResult: 10,
                  user: {
                    id: 0,
                    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    nickname: 'Liteon X'
                  }
              }}/> 
            </PageContentSection>      
             
            <PageContentSection title="Answers">
              <ThreadCommentCard comment={{
                      id: 1,
                      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
                      commentReactionsResult: 5,
                      user: {
                        id: 1,
                        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        nickname: 'Volti'
                      }
                  }}/> 
                <ThreadCommentCard comment={{
                      id: 2,
                      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
                      commentReactionsResult: 2,
                      user: {
                        id: 2,
                        imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        nickname: 'Arry'
                      }
                  }}/> 
            </PageContentSection>
            <PageContentSection title="Related Threads">
            <div>????TODO: RELEATED THREADS ????</div>
            </PageContentSection>
          </PageContent>
        </Page>
    )
}