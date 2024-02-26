'use server';
import { env } from '@/env';

export async function submitIssue(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const checked = formData.get('checked') as string;

  const body = `Issue submitted by: ${email}\n\nTitle: ${title}\n\nDescription: ${description}\n\nResponse Requested?: ${checked}`;

  const payload = {
    title: title,
    body: body,
    labels: ['bug'],
    assignees: ['biohackerellie'],
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/biohackerellie/OpenFacilities/issues`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    );
    console.log('response', response);
    if (response.status !== 201) {
      return {
        message: 'Error submitting issue',
      };
    }
    return {
      message: 'Issue submitted successfully!',
    };
  } catch (error) {
    console.error('Error submitting issue: ', error);
    return {
      message: 'Error submitting issue',
    };
  }
}
