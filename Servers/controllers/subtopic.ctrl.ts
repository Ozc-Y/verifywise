import { Request, Response } from "express";
import { MOCKDATA_ON } from "../flags";

import { STATUS_CODE } from "../utils/statusCode.utils";
import {
  createMockSubtopic,
  deleteMockSubtopicById,
  getAllMockSubtopics,
  getMockSubtopicById,
  updateMockSubtopicById,
} from "../mocks/tools/subtopic.mock.db";
import {
  createNewSubtopicQuery,
  deleteSubtopicByIdQuery,
  getAllSubtopicsQuery,
  getSubtopicByIdQuery,
  updateSubtopicByIdQuery,
} from "../utils/subtopic.utils";

export async function getAllSubtopics(
  req: Request,
  res: Response
): Promise<any> {
  try {
    if (MOCKDATA_ON) {
      const subtopics = getAllMockSubtopics();

      if (subtopics) {
        return res.status(200).json(STATUS_CODE[200](subtopics));
      }

      return res.status(204).json(STATUS_CODE[204](subtopics));
    } else {
      const subtopics = await getAllSubtopicsQuery();

      if (subtopics) {
        return res.status(200).json(STATUS_CODE[200](subtopics));
      }

      return res.status(204).json(STATUS_CODE[204](subtopics));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function getSubtopicById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const subtopicId = parseInt(req.params.id);

    if (MOCKDATA_ON) {
      const subtopic = getMockSubtopicById(subtopicId);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    } else {
      const subtopic = await getSubtopicByIdQuery(subtopicId);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function createNewSubtopic(
  req: Request,
  res: Response
): Promise<any> {
  try {
    if (MOCKDATA_ON) {
      const subtopic = createMockSubtopic(req.body.topicId, req.body.name);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    } else {
      const subtopic = await createNewSubtopicQuery(req.body);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function updateSubtopicById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const subtopicId = parseInt(req.params.id);

    if (MOCKDATA_ON) {
      const subtopic = updateMockSubtopicById(subtopicId, req.body);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    } else {
      const subtopic = await updateSubtopicByIdQuery(subtopicId, req.body);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function deleteSubtopicById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const subtopicId = parseInt(req.params.id);

    if (MOCKDATA_ON) {
      const subtopic = deleteMockSubtopicById(subtopicId);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    } else {
      const subtopic = await deleteSubtopicByIdQuery(subtopicId);

      if (subtopic) {
        return res.status(200).json(STATUS_CODE[200](subtopic));
      }

      return res.status(204).json(STATUS_CODE[204](subtopic));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}
