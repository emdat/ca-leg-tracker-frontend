'use server'
import { repositories } from '@/repositories/index';
 
export async function saveDiscussionComment(formData: FormData) {
  await repositories.billRepository.saveDiscussionComment(
    parseInt(formData.get('dashboardId') as string),
    parseInt(formData.get('billId') as string),
    parseInt(formData.get('userId') as string),
    formData.get('commentText') as string
  );
}

export async function saveBillDetails(formData: FormData) {
  await repositories.billRepository.saveBillDetails(
    parseInt(formData.get('billDetailsId') as string),
    formData.get('alternateName') as string,
    formData.get('policyNotes') as string,
    parseInt(formData.get('orgPosition') as string),
    parseInt(formData.get('platformArea') as string),
    parseInt(formData.get('communitySponsor') as string),
    formData.get('politicalIntel') as string,
    parseInt(formData.get('assignedUser') as string)
  );
}