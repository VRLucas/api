import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/FotoModel";
const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        if (!aluno_id) {
          return res.status(400).json({ errors: [err.code] });
        }
        const fotoCreate = await Foto.create({
          originalname,
          filename,
          aluno_id,
        });
        return res.json(fotoCreate);
      } catch (e) {
        return res.status(400).json({ errors: ["Aluno não existe"] });
      }
    });
  }

}

export default new FotoController();
