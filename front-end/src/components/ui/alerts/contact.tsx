import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';
import { Button } from '../buttons/button';
import React from 'react';

export default function Contact() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {/* <Button variant="link" className="text-gray-400 dark:text-gray-300"> */}
        Contact Us
        {/* </Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-opacity-100 bg-gray-300">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Have questions regarding a reservation or the reservation process?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <p className="text-black font-medium text-lg text-center">
            Contact the Activities Director at: <br />
            <a
              className="hover:text-blue-500"
              href="mailto:ExampleSchoolactivities@epklabs.com"
            >
              ExampleSchoolactivities@epklabs.com
            </a>{' '}
            <br />
            or call the ExampleSchool High School Office:
            <br />
            <a className="hover:text-blue-500" href="tel:406-628-3500">
              406-628-3500
            </a>
            .
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
