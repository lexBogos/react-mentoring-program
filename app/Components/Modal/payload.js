import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const EditMovieModalFields = ({
  onMovieEdit,
  onModalDisable,
  data,
  movieStoreService,
}) => {

  const EditMovieSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Required'),
    movieUrl: Yup.string().required('Required'),
    realiseDate: Yup.number()
      .required()
      .positive()
      .integer()
      .required('Required'),
    rate: Yup.number()
      .required()
      .positive()
      .required('Required'),
  });

  return (
    <>
      <h3>Edit Movie</h3>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          genre: data.genre,
          movieUrl: data.movieUrl,
          realiseDate: data.realiseDate,
          rate: data.rate,
        }}
        validationSchema={EditMovieSchema}
        onSubmit={values => {
          setTimeout(() => {
            movieStoreService.updateMovieData({movieId: data.id, movieData: values}).then((res)=>{
              console.log(res);
              onMovieEdit({...values, id: data.id});
              onModalDisable();
            });
          }, 0);
        }}
      >
        {({handleSubmit, values, errors}) => (
          <Form onSubmit={handleSubmit} className="addMovie">
            <Field
              name="title"
              value={values.title}
            />
            {errors.title && <div>{errors.title}</div>}
            <Field name="description" value={values.description} />
            {errors.description && <div>{errors.description}</div>}
            <Field name="movieUrl" value={values.movieUrl} />
            {errors.movieUrl && <div>{errors.movieUrl}</div>}
            <Field name="realiseDate" value={values.realiseDate} />
            {errors.realiseDate && <div>{errors.realiseDate}</div>}
            <Field
              as="select"
              name="genre"
              value={values.genre.split(",")[0]}
            >
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </Field>
            <Field name="rate" value={values.rate} />
            {errors.rate && <div>{errors.rate}</div>}
            <button type="submit">Submit</button>
            <button onClick={() => {onModalDisable()}}>RESET</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const DeleteMovieModalFields = ({
  onMovieRemove,
  chosenMovieId,
  movieStoreService,
}) => {
  return (
    <div className="addMovie">
      <h3>Delete Movie</h3>
      <div>
        <span>Are you sure want to delete this movie ?</span>
      </div>
      <div className="modalButton">
        <button
          onClick={() => {
            movieStoreService
              .removeMovie({ movieId: chosenMovieId })
              .then((res) => {
                console.log(res);
              });
            onMovieRemove(chosenMovieId);
          }}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};

const AddMovieModalFields = ({ onMovieAdd, movieStoreService }) => {
  const movieObj = {
    id: Math.round(Math.random() * 1000000000) + "", //Replace with UUID
    title: "",
    realiseDate: "",
    movieUrl: "",
    genre: "sci-fi",
    overview: "",
    runTime: "",
  };

  const AddMovieSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Required'),
    movieUrl: Yup.string().required('Required'),
    realiseDate: Yup.number()
      .required()
      .positive()
      .integer()
      .required('Required'),
    rate: Yup.number()
      .required()
      .positive()
      .required('Required'),
  });

  return (
    <>
      <h3>Edit Movie</h3>
      <Formik
        initialValues={{
          id: Math.round(Math.random() * 1000000000) + "", //Replace with UUID
          title: "",
          description: "",
          realiseDate: "",
          movieUrl: "",
          genre: "sci-fi",
          rate: "",
        }}
        validationSchema={AddMovieSchema}
        onSubmit={values => {
          setTimeout(() => {
            movieStoreService.updateMovieData({ movieData: values }).then((res)=>{
              console.log(res);
              onMovieAdd(values);
            });
          }, 0);
        }}
      >
        {({handleSubmit, values, errors}) => (
          <Form onSubmit={handleSubmit} className="addMovie">
            <Field
              name="title"
              value={values.title}
            />
            {errors.title && <div>{errors.title}</div>}
            <Field name="description" value={values.description} />
            {errors.description && <div>{errors.description}</div>}
            <Field name="movieUrl" value={values.movieUrl} />
            {errors.movieUrl && <div>{errors.movieUrl}</div>}
            <Field name="realiseDate" value={values.realiseDate} />
            {errors.realiseDate && <div>{errors.realiseDate}</div>}
            <Field
              as="select"
              name="genre"
              value={values.genre.split(",")[0]}
            >
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </Field>
            <Field name="rate" value={values.rate} />
            {errors.rate && <div>{errors.rate}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { AddMovieModalFields, EditMovieModalFields, DeleteMovieModalFields };
