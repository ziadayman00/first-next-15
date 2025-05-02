import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { handleSubmission } from '@/app/actions'
import React from 'react'
import Submitbutton from '@/components/Submitbutton'

const page = () => {
  return (
    <div>
      <Card className='max-w-lg mx-auto'>
        <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>
                Create a new post to share with the world
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action={handleSubmission} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1.5'>
                    <Label>Title</Label>
                    <Input name='title' required type='text' placeholder='Title' defaultValue='' />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <Label>Content</Label>
                    <Textarea name='content' required placeholder='Content' defaultValue='' />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <Label>Image URL</Label>
                    <Input name='url' required type='url' placeholder='Image url' defaultValue='' />
                </div>
                <Submitbutton/>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
