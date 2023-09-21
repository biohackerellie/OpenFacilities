import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, response: NextResponse) {
  const jirauser = process.env.JIRA_USER;
  const jiraToken = process.env.JIRA_API;
  const encodedCredentials = Buffer.from(`${jirauser}:${jiraToken}`).toString(
    'base64'
  );
  const jiraUrl =
    'https://laurelschools.atlassian.net/rest/servicedeskapi/request';

  const formData = await req.json();
  console.log('formdata: ', formData);
  const department = formData.department as string;

  const serviceDeskId = department === 'IT' ? '2' : '3';
  const requestTypeId = department === 'IT' ? '98' : '99';
  console.log('serviceDeskId: ', serviceDeskId);
  console.log('requestTypeId: ', requestTypeId);

  const config = {
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(jiraUrl, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        serviceDeskId: serviceDeskId,
        requestTypeId: requestTypeId,
        requestFieldValues: {
          summary: formData.summary,
          description: formData.description,
        },
        //raiseOnBehalfOf: jirauser,
      }),
    });
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
