<form className="post-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nama :</label>
                                        <input type="text" name="name" value={author} onChange={e => setAuthor(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Ceritakan Sesuatu :</label>
                                        <textarea name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tambah Gambar :</label>
                                        <input type="file" name="image" onChange={handleFileChange} />
                                    </div>
                                    <button type="submit" onClick={handleSubmit}>Posting</button>
                                </form>